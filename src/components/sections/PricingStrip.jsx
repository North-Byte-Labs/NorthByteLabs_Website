import React from 'react';

const ITEMS = [
  'Web Development', 'Brand Design', 'SEO & Ranking', 'Menu Design',
  'Analytics', 'Website Redesign', 'Maintenance', 'Digital Solutions',
];

// Infinite marquee strip with the pricing hook woven in.
export const PricingStrip = () => {
  const row = [...ITEMS, 'Websites from ₹3,999'];
  return (
    <div className="relative border-y border-border bg-secondary/30 py-5 overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-10">
            {row.map((item, i) => (
              <div key={`${dup}-${i}`} className="flex items-center gap-10">
                <span className={`font-display text-lg font-medium ${item.includes('₹') ? 'gradient-text' : 'text-muted-foreground'}`}>
                  {item}
                </span>
                <span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
