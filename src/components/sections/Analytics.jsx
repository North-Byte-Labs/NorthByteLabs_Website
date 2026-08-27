import React from 'react';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { ANALYTICS } from '@/data/site';

const PIE_COLORS = ['hsl(214 100% 60%)', 'hsl(188 95% 55%)', 'hsl(265 85% 66%)'];

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg glass-strong px-3 py-2 text-xs text-foreground">
      {label && <p className="mb-1 font-medium text-muted-foreground">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || p.fill }} className="font-semibold">
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

export const Analytics = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg radial-fade opacity-25" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Analytics dashboards"
          title="Your website should"
          highlight="show its work."
          subtitle="Track the signals that matter — visitors, enquiries, conversions and revenue — without drowning in spreadsheets."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl border border-border bg-gradient-surface p-4 shadow-elevated sm:p-6">
            {/* KPI row */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ANALYTICS.kpis.map((k) => (
                <div key={k.label} className="rounded-xl border border-border bg-secondary/40 p-4">
                  <p className="text-xs text-muted-foreground">{k.label}</p>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <span className="font-display text-xl font-semibold text-foreground sm:text-2xl">{k.value}</span>
                    <span className="text-xs font-semibold text-success">{k.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {/* Area trend */}
              <div className="rounded-xl border border-border bg-secondary/30 p-5 lg:col-span-2">
                <p className="mb-3 text-sm font-medium text-foreground">Visitors &amp; leads · last 6 months</p>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ANALYTICS.trend} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                      <defs>
                        <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(214 100% 60%)" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="hsl(214 100% 60%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(225 24% 18%)" vertical={false} />
                      <XAxis dataKey="m" tick={{ fill: 'hsl(214 16% 55%)', fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: 'hsl(214 16% 55%)', fontSize: 12 }} axisLine={false} tickLine={false} />
                      <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'hsl(214 100% 60%)', strokeOpacity: 0.2 }} />
                      <Area type="monotone" name="Visits" dataKey="visits" stroke="hsl(214 100% 65%)" strokeWidth={2.5} fill="url(#visitsFill)" animationDuration={1600} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Traffic sources donut */}
              <div className="rounded-xl border border-border bg-secondary/30 p-5">
                <p className="mb-3 text-sm font-medium text-foreground">Traffic sources</p>
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={ANALYTICS.traffic} dataKey="value" nameKey="name" innerRadius={42} outerRadius={64} paddingAngle={3} strokeWidth={0} animationDuration={1400}>
                        {ANALYTICS.traffic.map((e, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                      </Pie>
                      <Tooltip content={<ChartTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-3 space-y-1.5">
                  {ANALYTICS.traffic.map((t, i) => (
                    <div key={t.name} className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                        {t.name}
                      </span>
                      <span className="font-semibold text-foreground">{t.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Leads bar */}
            <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-5">
              <p className="mb-3 text-sm font-medium text-foreground">Monthly leads</p>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ANALYTICS.trend} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(225 24% 18%)" vertical={false} />
                    <XAxis dataKey="m" tick={{ fill: 'hsl(214 16% 55%)', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<ChartTooltip />} cursor={{ fill: 'hsl(214 100% 60% / 0.06)' }} />
                    <Bar name="Leads" dataKey="leads" radius={[6, 6, 0, 0]} fill="hsl(265 85% 66%)" animationDuration={1400} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">* Illustrative dashboard for demonstration purposes.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
