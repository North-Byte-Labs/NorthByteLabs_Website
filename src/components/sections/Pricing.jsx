import React from 'react';
import { Check, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/common/Reveal';
import { CONTACT, SHOWCASE_FEATURES } from '@/data/site';

// Dedicated, highlighted pricing section placed right after the hero
// so the ₹3,999 starting price gets immediate attention.
export const Pricing = () => {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hi NorthByte Labs, I'd like a website starting at ₹3,999.",
  )}`;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-20 sm:py-28" data-testid="pricing-section">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-glow blur-3xl opacity-60" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-surface p-8 text-center shadow-glow-blue sm:p-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Transparent pricing
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Websites starting at just <span className="gradient-text">₹3,999</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A modern, responsive and SEO-ready website for your business — built to make a strong
              first impression and bring in more customers.
            </p>

            <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {SHOWCASE_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground"
                >
                  <Check className="h-4 w-4 text-success" /> {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={scrollToContact}
                data-testid="pricing-get-started"
                className="w-full rounded-xl brand-gradient text-base font-semibold text-primary-foreground shadow-glow-blue hover:opacity-90 border-0 sm:w-auto"
              >
                Get started <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="pricing-whatsapp"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-success/30 bg-success/10 px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-success/20 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-success" /> Chat on WhatsApp
              </a>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              No hidden charges · Final quote after a quick chat about your needs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};


