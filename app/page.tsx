'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Process } from '@/components/Process';
import { Portfolio } from '@/components/Portfolio';
import { Footer } from '@/components/Footer';
import { CONTACT_EMAIL } from '@/lib/constants';
import { motion } from 'motion/react';

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

        {/* CTA Section */}
        <section className="py-40 px-6 relative z-10">
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
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block bg-white text-black px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-transform duration-300"
                aria-label="Связаться с нами"
              >
                Связаться с нами
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
