'use client';

import { motion } from 'motion/react';
import { CONTACT_CTA } from '@/lib/company-profile';

export function CtaSection() {
  return (
    <section id="cta" className="py-24 md:py-28 lg:py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-8 font-display text-balance text-center">
            Обсудим проект?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto text-center">
            Напишите нам, и мы подготовим оценку стоимости и сроков в течение 24 часов.
          </p>
          <a
            href={CONTACT_CTA.href}
            className="inline-block bg-white text-black px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-transform duration-300"
            aria-label="Связаться с нами"
          >
            {CONTACT_CTA.primaryLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
