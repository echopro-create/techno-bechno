'use client';

import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '@/lib/constants';
import { CONTACT_CTA } from '@/lib/company-profile';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Block scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium text-white/80">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white relative z-50 shrink-0">
            <Code2 className="size-6" />
            <span className="font-semibold tracking-tight text-base sm:text-lg font-display whitespace-nowrap">Техно-Бэхно</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center justify-end w-32 gap-4 relative z-50">
            <a 
              href={CONTACT_CTA.href}
              className="hidden sm:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
              aria-label="Связаться с нами"
            >
              {CONTACT_CTA.shortLabel}
            </a>
            
            <button 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Move out of the blurred nav for a clean stacking context */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[60] md:hidden flex flex-col pt-24"
          >
            <div className="flex flex-col px-8 gap-8 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-4xl font-semibold font-display text-white border-b border-white/5 pb-6"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <a 
                  href={CONTACT_CTA.href}
                  className="flex items-center justify-center bg-white text-black px-8 py-5 rounded-full text-xl font-bold w-full hover:bg-zinc-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {CONTACT_CTA.primaryLabel}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
