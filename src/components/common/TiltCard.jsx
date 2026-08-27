import React, { useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Physical 3D tilt card. Tilts toward the cursor; disabled on mobile / reduced-motion.
export const TiltCard = ({ children, className = '', max = 8, glare = true, ...props }) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const [style, setStyle] = useState({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });
  const disabled = isMobile || reduced;

  const handleMove = (e) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    setStyle({ transform: `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)` });
    setGlarePos({ x: px * 100, y: py * 100, o: 0.14 });
  };
  const reset = () => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg) translateZ(0)' });
    setGlarePos((g) => ({ ...g, o: 0 }));
  };

  return (
    <div className="perspective-1000" {...props}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ ...style, transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)' }}
        className={`preserve-3d relative ${className}`}
      >
        {children}
        {glare && !disabled && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              opacity: glarePos.o,
              background: `radial-gradient(320px circle at ${glarePos.x}% ${glarePos.y}%, hsl(214 100% 75% / 0.5), transparent 60%)`,
              transition: 'opacity 0.3s ease',
            }}
          />
        )}
      </div>
    </div>
  );
};
