import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';

const BEFORE = 'https://static.prod-images.emergentagent.com/jobs/526e861d-3ae2-4a48-bbae-38c8feef74c3/images/f3c96ef7f661659c662c9cac30eac13a2928d6ed546b2f93444aa6108e0098c0.jpeg';
const AFTER = 'https://static.prod-images.emergentagent.com/jobs/526e861d-3ae2-4a48-bbae-38c8feef74c3/images/fde4524203e2f5c49da59e1b96ecc7444750dd2b820c8e913069962460cf83d2.jpeg';

export const BeforeAfter = () => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(clientX);
    };
    const up = () => { dragging.current = false; };
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, [setFromClientX]);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4));
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Website redesign"
          title="From outdated"
          highlight="→ outstanding"
          subtitle="Drag the handle to see how a tired website becomes a modern, high-performing digital experience."
        />

        <Reveal delay={0.1}>
          <div
            ref={containerRef}
            className="relative mt-12 aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-border shadow-elevated sm:aspect-[16/9]"
            data-testid="before-after"
          >
            {/* After (base) */}
            <img src={AFTER} alt="Modern redesigned website" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs font-semibold text-foreground">AFTER</span>

            {/* Before (clipped) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img src={BEFORE} alt="Outdated website before redesign" loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }} />
              <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">BEFORE</span>
            </div>

            {/* Handle */}
            <div className="absolute inset-y-0" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
              <div className="relative h-full w-1 brand-gradient" />
              <button
                aria-label="Drag to compare before and after"
                onKeyDown={onKey}
                onMouseDown={() => { dragging.current = true; }}
                onTouchStart={() => { dragging.current = true; }}
                className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full glass-strong text-foreground shadow-glow-blue focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <MoveHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
