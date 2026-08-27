import React, { Suspense, lazy, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { HeroStatic } from './HeroStatic';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

const SceneFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="h-64 w-64 rounded-full bg-gradient-glow blur-2xl animate-pulse-glow" />
  </div>
);

export const Hero = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // "Camera travels backward": push the 3D scene back + fade as user scrolls.
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.72]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduced ? 1 : 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-0 -z-10 grid-bg radial-fade opacity-60" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-glow blur-3xl" />

      {/* 3D scene layer */}
      <motion.div
        style={{ scale: sceneScale, y: sceneY, opacity: sceneOpacity }}
        className="absolute inset-0 z-0"
      >
        {reduced ? (
          <HeroStatic />
        ) : (
          <Suspense fallback={<SceneFallback />}>
            <HeroScene />
          </Suspense>
        )}
      </motion.div>

      {/* Content layer */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6"
      >
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Digital solutions for modern businesses
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            We build{' '}
            <span className="gradient-text animate-gradient-text">digital experiences</span>{' '}
            that move businesses forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From high-performance websites to SEO, branding and analytics, NorthByte Labs
            helps businesses build a stronger digital presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="rounded-xl brand-gradient px-7 text-base font-semibold text-primary-foreground shadow-glow-blue hover:opacity-90 border-0">
              <a href="#contact" data-testid="hero-cta-primary">Start Your Project <ArrowRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-border bg-secondary/40 px-7 text-base font-medium text-foreground backdrop-blur hover:bg-secondary">
              <a href="#services" data-testid="hero-cta-secondary">Explore Our Services</a>
            </Button>
          </motion.div>

          {/* Price hook */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground"
          >
            <Star className="h-4 w-4 fill-cyan text-cyan" />
            {CONTACT.priceHook}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            <span>Web Development</span><span className="text-primary">•</span>
            <span>SEO</span><span className="text-primary">•</span>
            <span>Branding</span><span className="text-primary">•</span>
            <span>Analytics</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <div className="h-2 w-1 rounded-full bg-primary animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
