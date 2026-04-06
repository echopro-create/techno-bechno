'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { CONTACT_CTA } from '@/lib/company-profile';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yText = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const yImage = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const scaleImage = useTransform(heroScroll, [0, 1], [1, 1.05]);

  const textContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const textItem: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 z-10 overflow-hidden">
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="max-w-5xl mx-auto z-20"
      >
        <motion.h1 
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 font-display text-center text-balance max-w-5xl mx-auto"
        >
          <span className="sr-only">Разработка сайтов и мобильных приложений</span>
          <motion.span variants={textItem} className="inline-block" aria-hidden="true">Разработка сайтов&nbsp;</motion.span>
          <motion.span variants={textItem} className="inline-block" aria-hidden="true">и мобильных&nbsp;</motion.span>
          <motion.span variants={textItem} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600" aria-hidden="true">приложений</motion.span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-3xl text-zinc-400 font-medium max-w-3xl mx-auto mb-12 tracking-tight text-pretty text-center"
        >
          Премиальные веб-сайты и мобильные приложения. Искусство кода и дизайна.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href={CONTACT_CTA.href}
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            aria-label="Начать проект"
          >
            {CONTACT_CTA.primaryLabel} <ChevronRight className="size-5" />
          </a>
          <a 
            href="#portfolio"
            className="bg-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-xl border border-white/10"
            aria-label="Смотреть работы"
          >
            Смотреть работы
          </a>
        </motion.div>
      </motion.div>

      {/* Abstract Hero Image/Shape */}
      <motion.div 
        style={{ y: yImage, scale: scaleImage }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-6xl h-[40vh] md:h-[50vh] bg-gradient-to-t from-black via-zinc-900/50 to-transparent rounded-t-[100%] blur-3xl opacity-60 -z-10"
      />
    </section>
  );
}
