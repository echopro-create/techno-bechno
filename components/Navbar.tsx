'use client';

import { Code2 } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/constants';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium text-white/80 relative">
        <div className="flex items-center gap-2 text-white w-32">
          <Code2 className="size-6" />
          <span className="font-semibold tracking-tight text-lg font-display">Studio</span>
        </div>
        <div className="hidden md:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
          <a href="#services" className="hover:text-white transition-colors" aria-label="Услуги">Услуги</a>
          <a href="#features" className="hover:text-white transition-colors" aria-label="Преимущества">Преимущества</a>
          <a href="#process" className="hover:text-white transition-colors" aria-label="Процесс">Процесс</a>
          <a href="#portfolio" className="hover:text-white transition-colors" aria-label="Портфолио">Портфолио</a>
        </div>
        <div className="flex justify-end w-32">
          <a 
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
            aria-label="Связаться с нами"
          >
            Связаться
          </a>
        </div>
      </div>
    </nav>
  );
}
