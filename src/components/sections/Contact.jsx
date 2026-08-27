import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { CONTACT, SERVICE_OPTIONS, BUDGET_OPTIONS, FAQS } from '@/data/site';

const emptyForm = { name: '', email: '', phone: '', business: '', service: '', budget: '', message: '' };

const DETAILS = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: 'Phone', value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}` },
  { icon: MapPin, label: 'Location', value: CONTACT.location, href: null },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'X', href: '#' },
];

const WEB3FORMS_ACCESS_KEY = 'fa703f92-049e-4309-b632-550178a15394';

export const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  // Native form POST into a hidden iframe — works from any origin (no CORS),
  // exactly like a standard Web3Forms HTML submit but kept in-page.
  const handleSubmit = (e) => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      e.preventDefault();
      toast.error('Please add your name, email and a short message.');
      return;
    }
    const emailOk = /.+@.+\..+/.test(form.email);
    if (!emailOk) {
      e.preventDefault();
      toast.error('Please enter a valid email address.');
      return;
    }
    // valid — let the native submit proceed to the hidden iframe
    submittedRef.current = true;
    setSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    setSubmitting(false);
    toast.success('Thanks! Your message has been sent — we’ll get back to you shortly.');
    setForm(emptyForm);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-glow blur-3xl opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let’s make your next move"
          highlight="matter."
          subtitle="Tell us about your project and we’ll get back to you quickly. Websites start at just ₹3,999."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              target="w3f_iframe"
              acceptCharset="UTF-8"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-gradient-surface p-6 sm:p-8"
              data-testid="contact-form"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} readOnly />
              <input type="hidden" name="subject" value="New project enquiry — NorthByte Labs" readOnly />
              <input type="hidden" name="from_name" value={CONTACT.brand} readOnly />
              <input type="hidden" name="name" value={form.name} readOnly />
              <input type="hidden" name="email" value={form.email} readOnly />
              <input type="hidden" name="phone" value={form.phone || 'Not provided'} readOnly />
              <input type="hidden" name="business" value={form.business || 'Not provided'} readOnly />
              <input type="hidden" name="service" value={form.service || 'Not specified'} readOnly />
              <input type="hidden" name="budget" value={form.budget || 'Not specified'} readOnly />
              <input type="hidden" name="message" value={form.message} readOnly />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" data-testid="input-name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" className="bg-secondary/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" data-testid="input-email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className="bg-secondary/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input id="phone" data-testid="input-phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91…" className="bg-secondary/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business name</Label>
                  <Input id="business" data-testid="input-business" value={form.business} onChange={(e) => update('business', e.target.value)} placeholder="Company / brand" className="bg-secondary/40" />
                </div>
                <div className="space-y-2">
                  <Label>Service required</Label>
                  <Select value={form.service} onValueChange={(v) => update('service', v)}>
                    <SelectTrigger className="bg-secondary/40" data-testid="select-service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Budget range</Label>
                  <Select value={form.budget} onValueChange={(v) => update('budget', v)}>
                    <SelectTrigger className="bg-secondary/40" data-testid="select-budget"><SelectValue placeholder="Select a range" /></SelectTrigger>
                    <SelectContent>
                      {BUDGET_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" data-testid="input-message" rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about your project…" className="bg-secondary/40" />
              </div>
              <Button type="submit" size="lg" disabled={submitting} data-testid="contact-submit" className="mt-6 w-full rounded-xl brand-gradient text-base font-semibold text-primary-foreground shadow-glow-blue hover:opacity-90 border-0 disabled:opacity-60 sm:w-auto">
                {submitting ? 'Sending…' : (<>Let’s Talk <ArrowRight className="ml-1.5 h-4 w-4" /></>)}
              </Button>
            </form>
            <iframe
              name="w3f_iframe"
              title="form-submission-target"
              onLoad={handleIframeLoad}
              style={{ display: 'none' }}
              aria-hidden="true"
            />
          </Reveal>

          {/* Details + FAQ */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-border bg-gradient-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">Contact details</h3>
                <ul className="mt-4 space-y-4">
                  {DETAILS.map((d) => {
                    const Icon = d.icon;
                    const inner = (
                      <span className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/50">
                          <Icon className="h-4 w-4 text-primary" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-wide text-muted-foreground">{d.label}</span>
                          <span className="block text-sm font-medium text-foreground break-all">{d.value}</span>
                        </span>
                      </span>
                    );
                    return (
                      <li key={d.label}>
                        {d.href ? <a href={d.href} className="transition-opacity hover:opacity-80">{inner}</a> : inner}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-success/20"
                >
                  <MessageCircle className="h-4 w-4 text-success" /> Chat on WhatsApp
                </a>
                <div className="mt-5 flex gap-2">
                  {SOCIALS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a key={s.label} href={s.href} aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-colors hover:text-foreground">
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">Questions, answered</h3>
                <Accordion type="single" collapsible className="mt-2">
                  {FAQS.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                      <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};


