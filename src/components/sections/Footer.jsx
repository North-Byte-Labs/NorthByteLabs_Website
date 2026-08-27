import React from 'react';
import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SERVICES, CONTACT } from '@/data/site';

const COMPANY_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={`${process.env.PUBLIC_URL || ''}/assets/northbyte-labs-logo-ondark.png`}
              alt="NorthByte Labs"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{CONTACT.tagline}</p>
            <p className="mt-3 text-sm font-medium gradient-text">{CONTACT.priceHook}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" /> <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <MessageCircle className="h-4 w-4" /> WhatsApp <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {year} NorthByte Labs. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
