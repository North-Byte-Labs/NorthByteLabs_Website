import React, { useEffect, useState } from 'react';
import { CONTACT } from '@/data/site';

// Official WhatsApp glyph.
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.115.552 4.174 1.6 5.995L4 29l8.2-1.55a11.94 11.94 0 0 0 3.803.62h.003C22.62 28.07 28 22.687 28 16.067 28 12.86 26.75 9.85 24.48 7.58A11.86 11.86 0 0 0 16.003 3Zm0 21.86h-.003a9.9 9.9 0 0 1-5.05-1.383l-.362-.215-3.746.708.71-3.653-.236-.375a9.86 9.86 0 0 1-1.51-5.272c0-5.478 4.46-9.937 9.945-9.937a9.87 9.87 0 0 1 7.026 2.91 9.87 9.87 0 0 1 2.912 7.03c0 5.478-4.46 9.937-9.936 9.937Zm5.45-7.44c-.298-.15-1.767-.872-2.04-.972-.274-.1-.473-.15-.672.15-.198.298-.771.97-.945 1.17-.174.198-.348.223-.646.075-.298-.15-1.26-.464-2.4-1.48-.887-.79-1.486-1.766-1.66-2.064-.174-.298-.019-.459.13-.607.134-.133.298-.347.447-.52.15-.174.198-.298.298-.497.1-.198.05-.372-.025-.52-.075-.15-.672-1.62-.92-2.216-.242-.583-.487-.504-.672-.513l-.573-.01c-.198 0-.52.074-.792.372-.273.298-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.15.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.767-.722 2.016-1.42.248-.697.248-1.294.174-1.42-.074-.124-.272-.198-.57-.347Z"/>
  </svg>
);

export const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi NorthByte Labs, I'd like to talk about a project.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-3.5 pr-3.5 py-3.5 text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.6)] transition-all duration-500 hover:pr-5 sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:ml-2 group-hover:max-w-[140px]">
        Chat with us
      </span>
    </a>
  );
};
