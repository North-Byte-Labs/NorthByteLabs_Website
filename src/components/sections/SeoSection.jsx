import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, Users, Trophy } from 'lucide-react';
import {
  AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, CartesianGrid,
} from 'recharts';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { SEO_METRICS } from '@/data/site';

const ICONS = [TrendingUp, Search, Users, Trophy];

const chartData = [
  { m: 'W1', v: 20 }, { m: 'W2', v: 32 }, { m: 'W3', v: 28 },
  { m: 'W4', v: 48 }, { m: 'W5', v: 60 }, { m: 'W6', v: 78 },
  { m: 'W7', v: 92 }, { m: 'W8', v: 100 },
];

const SeoTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg glass-strong px-3 py-1.5 text-xs text-foreground">
      Visibility index: <span className="font-semibold text-cyan">{payload[0].value}</span>
    </div>
  );
};

export const SeoSection = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="SEO & Google ranking"
          title="Get found by the people"
          highlight="searching for you."
          subtitle="Technical SEO, on-page content and local optimisation — built to compound over time."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {SEO_METRICS.map((m, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={m.label} delay={i * 0.06} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-gradient-surface p-5">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                    <div className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                      <AnimatedCounter to={m.value} prefix={m.prefix} suffix={m.suffix} />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Graph */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-gradient-surface p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Search visibility trend</p>
                  <p className="font-display text-2xl font-semibold text-foreground">Climbing to the top</p>
                </div>
                <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">Live-style demo</span>
              </div>
              <div className="mt-4 h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="seoFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(188 95% 55%)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="hsl(188 95% 55%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(225 24% 18%)" vertical={false} />
                    <XAxis dataKey="m" tick={{ fill: 'hsl(214 16% 55%)', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<SeoTooltip />} cursor={{ stroke: 'hsl(214 100% 60%)', strokeOpacity: 0.3 }} />
                    <Area type="monotone" dataKey="v" stroke="hsl(188 95% 60%)" strokeWidth={2.5} fill="url(#seoFill)" animationDuration={1600} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-6 text-center text-xs text-muted-foreground"
        >
          * Figures shown are an illustrative example for demonstration and are not tied to a specific client account.
        </motion.p>
      </div>
    </section>
  );
};
