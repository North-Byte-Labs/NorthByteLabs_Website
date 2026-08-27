import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { SHOWCASE_FEATURES } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const LAPTOP_IMG = 'https://static.prod-images.emergentagent.com/jobs/526e861d-3ae2-4a48-bbae-38c8feef74c3/images/9f471d70d1d31daf1159e7741dfe6d5d34264ddc97d2dce6f776665e9dac484a.jpeg';

export const Showcase = () => {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/3 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-glow blur-3xl opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Website development"
              title="Your website should work as hard as"
              highlight="you do."
              subtitle="Distinctive, responsive and fast — built on search-friendly foundations and designed to turn visitors into customers."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SHOWCASE_FEATURES.map((f, i) => (
                <Reveal key={f} delay={i * 0.05}>
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full brand-gradient">
                      <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="perspective-1000">
              <motion.div
                animate={reduced ? {} : { y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Laptop */}
                <div className="relative rounded-2xl border border-border bg-gradient-surface p-2.5 shadow-elevated">
                  <div className="mb-2 flex items-center gap-1.5 px-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-violet" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-border">
                    <img src={LAPTOP_IMG} alt="Premium website built by NorthByte Labs displayed on a browser" loading="lazy" className="aspect-[3/2] w-full object-cover" />
                  </div>
                </div>
                <div className="mx-auto h-3 w-[70%] rounded-b-xl border-x border-b border-border bg-secondary/60" />

                {/* Floating labels */}
                <div className="absolute -left-4 top-8 hidden rounded-xl glass-strong px-3 py-2 text-sm font-semibold text-foreground shadow-glow-blue sm:block animate-float">
                  96 <span className="text-muted-foreground font-normal">/100</span>
                </div>
                <div className="absolute -right-4 bottom-16 hidden rounded-xl glass-strong px-3 py-2 text-sm font-semibold text-cyan shadow-glow-blue sm:block animate-float-slow">
                  Fast ⚡
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
