import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Type, CreditCard, Instagram, UtensilsCrossed, Package, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ITEMS = [
  { icon: Sparkles, label: 'Logo' },
  { icon: Palette, label: 'Colour palette' },
  { icon: Type, label: 'Typography' },
  { icon: CreditCard, label: 'Business card' },
  { icon: Instagram, label: 'Social post' },
  { icon: UtensilsCrossed, label: 'Restaurant menu' },
  { icon: Package, label: 'Packaging' },
];

const PALETTE = ['hsl(214 100% 60%)', 'hsl(188 95% 55%)', 'hsl(265 85% 66%)', 'hsl(210 40% 98%)', 'hsl(228 20% 20%)'];

export const Branding = () => {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Brand identity"
              title="Your brand deserves more than"
              highlight="a logo."
              subtitle="Simple, ownable identities so every first impression counts — from logo and palette to menus, cards and packaging."
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {ITEMS.map((it, i) => {
                const Icon = it.icon;
                return (
                  <Reveal key={it.label} delay={i * 0.04}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-2 text-sm font-medium text-foreground">
                      <Icon className="h-4 w-4 text-primary" strokeWidth={1.6} /> {it.label}
                    </span>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Central brand object with orbiting palette */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
              <div className="absolute inset-8 rounded-full bg-gradient-glow blur-2xl" />
              <motion.div
                animate={reduced ? {} : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                {PALETTE.map((c, i) => {
                  const angle = (i / PALETTE.length) * Math.PI * 2;
                  const r = 44;
                  return (
                    <span
                      key={i}
                      className="absolute h-10 w-10 rounded-xl border border-border shadow-lg"
                      style={{
                        background: c,
                        left: `${50 + Math.cos(angle) * r}%`,
                        top: `${50 + Math.sin(angle) * r}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  );
                })}
              </motion.div>
              <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-3xl glass-strong shadow-glow-violet">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient">
                  <span className="font-display text-2xl font-bold text-primary-foreground">N</span>
                </span>
                <span className="mt-3 font-display text-sm font-semibold tracking-tight text-foreground">NorthByte Labs</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Brand system</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
