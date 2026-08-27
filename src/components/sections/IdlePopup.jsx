import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { CONTACT } from '@/data/site';

const IDLE_MS = 5000;

// Shows a friendly "reach out" prompt once the visitor is idle for 5 seconds.
export const IdlePopup = () => {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    let timer;
    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'click'];

    const reset = () => {
      if (shownRef.current) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        shownRef.current = true;
        setOpen(true);
        events.forEach((e) => window.removeEventListener(e, reset));
      }, IDLE_MS);
    };

    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    reset();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, []);

  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hi NorthByte Labs, I have a question about a project.",
  )}`;
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Project enquiry — NorthByte Labs')}`;

  const OPTIONS = [
    {
      testid: 'idle-option-whatsapp',
      icon: MessageCircle,
      label: 'Chat on WhatsApp',
      sub: 'Fastest reply',
      href: wa,
      external: true,
      className: 'border-success/30 bg-success/10 hover:bg-success/20 text-foreground',
      iconClass: 'text-success',
    },
    {
      testid: 'idle-option-email',
      icon: Mail,
      label: 'Email us',
      sub: CONTACT.email,
      href: mailto,
      external: false,
      className: 'border-primary/30 bg-primary/10 hover:bg-primary/20 text-foreground',
      iconClass: 'text-primary',
    },
    {
      testid: 'idle-option-call',
      icon: Phone,
      label: 'Call us',
      sub: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phoneTel}`,
      external: false,
      className: 'border-border bg-secondary/40 hover:bg-secondary/70 text-foreground',
      iconClass: 'text-foreground',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent data-testid="idle-popup" className="max-w-md border-border bg-gradient-surface">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Still there? Let’s talk 👋</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Have a project in mind or a quick question? Reach out — we usually reply fast. Websites
            start at just ₹3,999.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 grid gap-3">
          {OPTIONS.map((o) => {
            const Icon = o.icon;
            return (
              <a
                key={o.testid}
                href={o.href}
                data-testid={o.testid}
                onClick={() => setOpen(false)}
                {...(o.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-semibold transition-colors ${o.className}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background/40">
                  <Icon className={`h-5 w-5 ${o.iconClass}`} />
                </span>
                <span className="flex flex-col text-left">
                  <span>{o.label}</span>
                  <span className="text-xs font-normal text-muted-foreground break-all">{o.sub}</span>
                </span>
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};


