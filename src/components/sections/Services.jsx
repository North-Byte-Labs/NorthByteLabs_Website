import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { TiltCard } from '@/components/common/TiltCard';
import { SERVICES } from '@/data/site';

const accentMap = {
  blue: 'text-primary',
  violet: 'text-violet',
  cyan: 'text-cyan',
};
const glowMap = {
  blue: 'group-hover:shadow-glow-blue',
  violet: 'group-hover:shadow-glow-violet',
  cyan: 'group-hover:shadow-glow-blue',
};

export const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg radial-fade opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to"
          highlight="grow online"
          subtitle="From a strong visual foundation to ongoing visibility and reporting — practical work that helps your business move forward."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.05} className="h-full">
                <TiltCard className="h-full">
                  <a
                    href="#contact"
                    data-testid={`service-card-${i}`}
                    className={`group flex h-full flex-col rounded-2xl border border-border bg-gradient-surface p-6 transition-all duration-300 hover:border-primary/40 ${glowMap[s.accent]}`}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/60 transition-transform duration-300 group-hover:-translate-y-1" style={{ transform: 'translateZ(30px)' }}>
                      <Icon className={`h-6 w-6 ${accentMap[s.accent]}`} strokeWidth={1.6} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
