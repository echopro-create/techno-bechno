'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { Globe, Key, Smartphone, Apple, Monitor, ArrowRight } from 'lucide-react';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Process } from '@/components/Process';
import { Portfolio } from '@/components/Portfolio';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Footer } from '@/components/Footer';
import { CONTACT_CTA } from '@/lib/company-profile';
import { SEO_LANDING_LINKS } from '@/lib/seo-nav';
import { motion } from 'motion/react';

const SEO_ICONS = [
  <Globe key="globe" className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
  <Key key="key" className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
  <Smartphone key="smartphone" className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
  <Apple key="apple" className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
  <Monitor key="monitor" className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
];

export default function Home() {
  // Smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white/20">
      <BackgroundEffects />
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Process />
        <Portfolio />

        <section className="px-6 py-24 md:py-28 lg:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500 mb-4">
                Приоритетные направления
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-display text-balance text-center">
                Решения для вашего бизнеса
              </h2>
              <p className="text-xl text-zinc-400 text-pretty max-w-2xl mx-auto">
                Выберите направление, чтобы узнать подробнее о подходах, сроках и стоимости разработки.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {SEO_LANDING_LINKS.map((item, index) => (
                <SpotlightCard key={item.href} delay={index * 0.1} className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] p-6 sm:p-8 md:p-10 lg:p-12 h-full text-center md:text-left">
                  <div className="relative z-10 h-full flex flex-col justify-between items-center md:items-start">
                    <div>
                      <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 flex justify-center md:block">
                        {SEO_ICONS[index]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 font-display">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed text-base md:text-lg">{item.description}</p>
                    </div>
                    <Link href={item.href} className="mt-6 md:mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                      Подробнее <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-28 lg:py-32 px-6 relative z-10">
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
      </main>

      <Footer />
    </div>
  );
}
