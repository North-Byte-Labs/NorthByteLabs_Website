import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { TiltCard } from '@/components/common/TiltCard';
import { Badge } from '@/components/ui/badge';
import { PORTFOLIO, PORTFOLIO_FILTERS } from '@/data/site';

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.categories.includes(filter));

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg radial-fade opacity-25" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent launches,"
          highlight="real results."
          subtitle="A snapshot of the work — websites, branding, SEO and dashboards for growing businesses."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-testid={`filter-${f.toLowerCase()}`}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? 'border-primary/50 bg-primary/15 text-foreground'
                  : 'border-border bg-secondary/30 text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06} className="h-full">
              <TiltCard max={6} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-surface">
                  <div className="relative overflow-hidden">
                    <img src={p.image} alt={`${p.title} — ${p.category}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    {!p.real && (
                      <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground backdrop-blur">Concept</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">{p.category}</span>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-md bg-secondary/70 text-xs font-normal text-muted-foreground">{t}</Badge>
                      ))}
                    </div>
                    <a
                      href={p.url || '#contact'}
                      {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                    >
                      View project <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
