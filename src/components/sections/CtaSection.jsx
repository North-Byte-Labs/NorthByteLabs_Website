import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const CtaSection = () => {
  const reduced = useReducedMotion();
  const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi NorthByte Labs, I'd like to talk about a project.")}`;
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-surface px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* Glowing orb */}
          <motion.div
            aria-hidden
            animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-glow blur-3xl"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade opacity-40" />

          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Let’s build
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            Ready to build{' '}
            <span className="gradient-text animate-gradient-text">something better?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Let’s turn your idea into a digital experience your customers remember. {CONTACT.priceHook}.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl brand-gradient px-7 text-base font-semibold text-primary-foreground shadow-glow-blue hover:opacity-90 border-0">
              <a href="#contact" data-testid="cta-start">Start Your Project <ArrowRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-border bg-secondary/40 px-7 text-base font-medium text-foreground hover:bg-secondary">
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-testid="cta-talk">
                <MessageCircle className="mr-1.5 h-4 w-4" /> Talk to Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
