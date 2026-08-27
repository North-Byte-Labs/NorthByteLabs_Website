import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { NAV_LINKS, CONTACT } from '@/data/site';

const LOGO = `${process.env.PUBLIC_URL || ''}/assets/northbyte-labs-logo-ondark.png`;

const BrandMark = ({ className = 'h-10 sm:h-11' }) => (
  <a href="#home" className="flex items-center group" aria-label="NorthByte Labs home">
    <img
      src={LOGO}
      alt="NorthByte Labs"
      className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
    />
  </a>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 260);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-elevated' : 'bg-transparent border border-transparent'
          }`}
        >
          <BrandMark />

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asChild variant="default" className="rounded-xl brand-gradient font-semibold text-primary-foreground shadow-glow-blue hover:opacity-90 border-0">
              <a href="#contact" data-testid="nav-cta">Start a Project <ArrowUpRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-xl" aria-label="Open menu" data-testid="mobile-menu-trigger">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86%] max-w-sm border-border bg-background/95 backdrop-blur-xl">
                <SheetHeader className="text-left">
                  <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                </SheetHeader>
                <div className="mt-2 flex items-center justify-between">
                  <BrandMark />
                </div>
                <ul className="mt-10 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <button
                        type="button"
                        onClick={() => go(link.href)}
                        data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                        className="block w-full rounded-xl px-4 py-3 text-left text-lg font-medium text-foreground/90 transition-colors hover:bg-secondary"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button onClick={() => go('#contact')} className="w-full rounded-xl brand-gradient font-semibold text-primary-foreground border-0">
                    Start a Project <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                  <p className="mt-4 text-center text-sm text-muted-foreground">{CONTACT.priceHook}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};
