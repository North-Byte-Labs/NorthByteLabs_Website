import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { Particles } from './Particles';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const BLUE = '#3d8bff';
const VIOLET = '#9a6bff';
const CYAN = '#3fe0e0';
const SURFACE = '#1b2a4a';

// An animated bar chart living on the browser "screen".
function ChartBars({ reduced }) {
  const group = useRef();
  const heights = useMemo(() => [0.4, 0.7, 0.55, 0.95, 0.75, 1.15, 0.9], []);
  useFrame((state) => {
    if (reduced || !group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((bar, i) => {
      bar.scale.y = 1 + Math.sin(t * 1.5 + i * 0.6) * 0.14;
    });
  });
  return (
    <group ref={group} position={[-0.95, -0.34, 0.11]}>
      {heights.map((h, i) => (
        <mesh key={i} position={[i * 0.3, h / 2, 0]}>
          <boxGeometry args={[0.16, h, 0.05]} />
          <meshStandardMaterial color={i % 2 ? CYAN : BLUE} emissive={i % 2 ? CYAN : BLUE} emissiveIntensity={1.1} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingPanel({ position, rotation = [0, 0, 0], color, scale = 1, reduced }) {
  return (
    <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.4} floatIntensity={reduced ? 0 : 0.9}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[1.1, 0.72, 0.08]} radius={0.06} smoothness={4}>
          <meshStandardMaterial color={SURFACE} metalness={0.1} roughness={0.6} emissive={color} emissiveIntensity={0.35} />
        </RoundedBox>
        <mesh position={[0, 0.16, 0.05]}>
          <boxGeometry args={[0.8, 0.08, 0.02]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.1} toneMapped={false} />
        </mesh>
        <mesh position={[-0.15, 0, 0.05]}>
          <boxGeometry args={[0.5, 0.05, 0.02]} />
          <meshStandardMaterial color="#5a6a90" emissive="#5a6a90" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.28, -0.14, 0.05]}>
          <boxGeometry args={[0.24, 0.05, 0.02]} />
          <meshStandardMaterial color="#43507a" />
        </mesh>
      </group>
    </Float>
  );
}

function BrowserWindow({ reduced }) {
  return (
    <group>
      {/* Frame */}
      <RoundedBox args={[3.4, 2.2, 0.16]} radius={0.12} smoothness={5}>
        <meshStandardMaterial color={SURFACE} metalness={0.15} roughness={0.5} emissive={BLUE} emissiveIntensity={0.22} />
      </RoundedBox>
      {/* Top bar */}
      <mesh position={[0, 0.92, 0.09]}>
        <boxGeometry args={[3.4, 0.36, 0.02]} />
        <meshStandardMaterial color="#22335c" metalness={0.1} roughness={0.6} emissive={BLUE} emissiveIntensity={0.15} />
      </mesh>
      {/* Traffic dots */}
      {[VIOLET, CYAN, BLUE].map((c, i) => (
        <mesh key={i} position={[-1.5 + i * 0.22, 0.92, 0.12]}>
          <circleGeometry args={[0.05, 24]} />
          <meshStandardMaterial color={c} emissive={c} emissiveIntensity={1.3} toneMapped={false} />
        </mesh>
      ))}
      {/* Screen */}
      <mesh position={[0, -0.08, 0.09]}>
        <planeGeometry args={[3.2, 1.5]} />
        <meshStandardMaterial color="#0e1a36" metalness={0.05} roughness={0.7} emissive="#0e1a36" emissiveIntensity={0.4} />
      </mesh>
      {/* SEO metric bars */}
      <mesh position={[0.75, 0.34, 0.11]}>
        <boxGeometry args={[1.3, 0.12, 0.02]} />
        <meshStandardMaterial color={VIOLET} emissive={VIOLET} emissiveIntensity={1.1} toneMapped={false} />
      </mesh>
      <mesh position={[0.55, 0.12, 0.11]}>
        <boxGeometry args={[0.9, 0.07, 0.02]} />
        <meshStandardMaterial color="#4a5a86" emissive="#4a5a86" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0.62, -0.02, 0.11]}>
        <boxGeometry args={[1.05, 0.05, 0.02]} />
        <meshStandardMaterial color="#3a4770" />
      </mesh>
      <ChartBars reduced={reduced} />
      {/* Phone mockup */}
      <group position={[1.95, -0.5, 0.24]} rotation={[0, -0.3, 0.05]}>
        <RoundedBox args={[0.52, 1.02, 0.08]} radius={0.07} smoothness={4}>
          <meshStandardMaterial color={SURFACE} metalness={0.1} roughness={0.55} emissive={CYAN} emissiveIntensity={0.3} />
        </RoundedBox>
        <mesh position={[0, 0.2, 0.05]}>
          <boxGeometry args={[0.36, 0.36, 0.01]} />
          <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={1.0} toneMapped={false} />
        </mesh>
        <mesh position={[0, -0.18, 0.05]}>
          <boxGeometry args={[0.34, 0.08, 0.01]} />
          <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.8} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function Scene({ reduced, isMobile }) {
  const group = useRef();
  const { pointer } = useThree();
  useFrame(() => {
    if (!group.current || reduced) return;
    const targetY = isMobile ? 0 : pointer.x * 0.35;
    const targetX = isMobile ? 0 : -pointer.y * 0.22;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
  });
  return (
    <group ref={group} position={[isMobile ? 0 : 1.1, 0.1, 0]}>
      <Float speed={reduced ? 0 : 1.1} rotationIntensity={reduced ? 0 : 0.15} floatIntensity={reduced ? 0 : 0.6}>
        <BrowserWindow reduced={reduced} />
      </Float>
      <FloatingPanel position={[-2.9, 1.3, -0.5]} rotation={[0.1, 0.4, -0.05]} color={VIOLET} scale={0.85} reduced={reduced} />
      <FloatingPanel position={[2.7, 1.4, -0.8]} rotation={[0.05, -0.5, 0.06]} color={CYAN} scale={0.72} reduced={reduced} />
      {!isMobile && (
        <FloatingPanel position={[-2.5, -1.35, -0.3]} rotation={[-0.08, 0.3, 0.04]} color={BLUE} scale={0.62} reduced={reduced} />
      )}
    </group>
  );
}

export default function HeroScene() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const particleCount = isMobile ? 280 : 850;

  return (
    <Canvas
      dpr={[1, isMobile ? 1 : 1.6]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 6, 5]} intensity={1.4} color="#dceaff" />
      <pointLight position={[-6, 2, 4]} intensity={140} color={BLUE} distance={28} decay={2} />
      <pointLight position={[6, -1, 5]} intensity={120} color={VIOLET} distance={28} decay={2} />
      <pointLight position={[0, 3, 3]} intensity={70} color={CYAN} distance={24} decay={2} />
      <Suspense fallback={null}>
        <Scene reduced={reduced} isMobile={isMobile} />
        <Particles count={particleCount} reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
