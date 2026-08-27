import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PROCESS } from '@/data/site';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const StepCard = ({ step, idx }) => (
  <div className="relative flex w-[80vw] shrink-0 flex-col rounded-2xl border border-border bg-gradient-surface p-8 sm:w-[420px] lg:w-[440px]">
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient font-display text-lg font-bold text-primary-foreground">
        {step.no}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
    </div>
    <h3 className="mt-6 text-2xl font-semibold text-foreground">{step.title}</h3>
    <p className="mt-2 text-muted-foreground">{step.desc}</p>
    <span className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">Step {idx + 1} of {PROCESS.length}</span>
  </div>
);

export const Process = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (isMobile || reduced) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const scrollDist = track.scrollWidth - window.innerWidth + 120;
      gsap.to(track, {
        x: -scrollDist,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollDist + 200}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile, reduced]);

  return (
    <section id="process" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="left"
          eyebrow="How we work"
          title="A simple way"
          highlight="forward."
          subtitle="Six focused steps — from understanding your business to helping it grow after launch."
        />
      </div>

      {/* Desktop: horizontal scrubbed track. Mobile: vertical stack. */}
      <div className="mt-12">
        <div
          ref={trackRef}
          className={
            (isMobile || reduced)
              ? 'flex flex-col gap-5 px-4 sm:px-6 max-w-7xl mx-auto'
              : 'flex gap-6 pl-4 sm:pl-6 pr-6 will-change-transform'
          }
        >
          {PROCESS.map((step, idx) => (
            <StepCard key={step.no} step={step} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
