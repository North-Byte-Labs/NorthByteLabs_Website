import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { STATS, TESTIMONIALS } from '@/data/site';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

export const Testimonials = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kind words"
          title="Trusted by businesses"
          highlight="who value craft."
          subtitle="Real feedback from the people we’ve worked with."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-gradient-surface p-7 transition-transform duration-300 hover:-translate-y-1.5">
                <Quote className="h-8 w-8 text-primary/40" />
                <div className="mt-4 flex gap-0.5" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-cyan text-cyan" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  {t.link ? (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-cyan"
                    >
                      {t.business} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <div className="text-sm text-muted-foreground">{t.business}</div>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-gradient-surface p-6 sm:p-8 lg:grid-cols-4">
          {STATS.map((st, i) => (
            <Reveal key={st.label} delay={i * 0.06}>
              <div className="text-center">
                <div className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  <AnimatedCounter to={st.value} suffix={st.suffix} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{st.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
