import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { WHY_CHOOSE } from '@/data/site';

export const WhyChoose = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why NorthByte Labs"
          title="Small studio energy."
          highlight="Serious digital craft."
          subtitle="You won’t be passed between departments. We stay close to the work — and to you — from the first call through launch."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w, i) => (
            <Reveal key={w.no} delay={i * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-surface p-7 transition-colors hover:border-primary/40">
                <span className="pointer-events-none absolute -right-3 -top-5 font-display text-8xl font-bold text-foreground/[0.04] transition-colors group-hover:text-primary/10">
                  {w.no}
                </span>
                <span className="font-mono text-sm font-medium text-primary">{w.no}</span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
