import React from 'react';
import { BarChart3, Smartphone } from 'lucide-react';

// Static, motion-free hero visual shown when prefers-reduced-motion is on
// (also avoids booting WebGL for users who opt out of motion).
export const HeroStatic = () => {
  const bars = [40, 68, 52, 92, 74, 100, 84];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-6">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-glow blur-3xl" />
        {/* Browser mockup */}
        <div className="rounded-2xl border border-border glass-strong p-4 shadow-glow-blue">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-violet" />
            <span className="h-3 w-3 rounded-full bg-cyan" />
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <div className="rounded-xl border border-border bg-secondary/40 p-5">
            <div className="flex items-center justify-between">
              <BarChart3 className="h-5 w-5 text-cyan" />
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">+148%</span>
            </div>
            <div className="mt-4 flex h-32 items-end gap-2">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md brand-gradient" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
        {/* Floating phone */}
        <div className="absolute -bottom-6 -right-4 hidden w-28 rounded-2xl border border-border glass-strong p-2 shadow-glow-violet sm:block">
          <div className="flex items-center justify-center rounded-xl bg-secondary/50 py-6">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
