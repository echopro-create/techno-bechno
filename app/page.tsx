'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { ArrowUpRight } from 'lucide-react';
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

const SEO_CARD_META = [
  {
    eyebrow: 'Веб-решения',
    accentClass: 'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_58%)]',
  },
  {
    eyebrow: 'Полный цикл',
    accentClass: 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_55%)]',
  },
  {
    eyebrow: 'Mobile MVP',
    accentClass: 'bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.09),transparent_54%)]',
  },
  {
    eyebrow: 'Native iOS',
    accentClass: 'bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_56%)]',
  },
  {
    eyebrow: 'Android',
    accentClass: 'bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_56%)]',
  },
] as const;

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
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-display text-balance">
                Готовые страницы под ключевые услуги
              </h2>
              <p className="text-xl text-zinc-400 text-pretty max-w-2xl mx-auto">
                Если вам нужен конкретный формат проекта, можно сразу перейти на профильную страницу по услуге и быстрее понять подход, объём работ и сценарий запуска.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
              {SEO_LANDING_LINKS.map((item, index) => (
                <SpotlightCard key={item.href} delay={index * 0.08} className="h-full min-h-[280px] p-12">
                  <Link href={item.href} className="relative z-10 grid h-full grid-rows-[auto_minmax(0,1fr)_auto]">
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90 ${SEO_CARD_META[index]?.accentClass ?? SEO_CARD_META[0].accentClass}`}
                    />

                    <div className="relative z-10 mb-8 flex items-center justify-between gap-4 transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-zinc-200">
                        {SEO_CARD_META[index]?.eyebrow ?? 'Направление'}
                      </span>
                      <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="relative z-10 flex max-w-[15.5rem] flex-col">
                      <h3 className="mb-4 min-h-[4.625rem] text-2xl font-semibold leading-[1.02] tracking-tight font-display text-balance text-white">
                        {item.title}
                      </h3>
                      <p className="min-h-[5.5rem] text-lg leading-[1.65] text-zinc-400 text-pretty">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between gap-4 pt-8">
                      <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                        Открыть страницу
                      </span>
                      <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/20 group-hover:text-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </Link>
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
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 font-display text-balance">
                Готовы начать?
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 mb-12 text-pretty">
                Давайте обсудим вашу идею и превратим ее в выдающийся продукт.
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
