'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export function Portfolio() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: showcaseScroll } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"]
  });
  const yPhone = useTransform(showcaseScroll, [0, 1], [100, -100]);
  const yMac = useTransform(showcaseScroll, [0, 1], [-50, 50]);

  return (
    <section id="portfolio" ref={showcaseRef} className="py-24 md:py-28 lg:py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-display text-balance text-center">
            Наши работы
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 text-pretty text-center">
            Кейсы с реальным результатом
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* iPhone Mockup */}
          <motion.div 
            style={{ y: yPhone }}
            className="relative w-[300px] h-[620px] rounded-[3.5rem] border-[14px] border-zinc-900 bg-black shadow-2xl overflow-hidden flex-shrink-0"
          >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 inset-x-0 h-7 bg-zinc-900 rounded-full w-24 mx-auto z-20"></div>
            <Image 
              src="/echo-ios-app.png" 
              alt="iOS App Mockup" 
              fill 
              priority
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover object-top"
            />
          </motion.div>

          {/* MacBook Mockup */}
          <motion.div 
            style={{ y: yMac }}
            className="relative w-full max-w-3xl flex flex-col items-center"
          >
            {/* Screen Frame */}
            <div className="relative w-full p-3 sm:p-4 bg-zinc-800 rounded-t-3xl shadow-2xl">
              {/* Camera */}
              <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-zinc-950 rounded-full z-20"></div>
              {/* Screen */}
              <div className="relative w-full aspect-[16/10] bg-black overflow-hidden rounded-sm border border-zinc-900">
                <Image 
                  src="/dabat-site.png" 
                  alt="Web App Mockup" 
                  fill 
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Base */}
            <div className="relative w-[115%] h-3 sm:h-5 bg-zinc-700 rounded-b-3xl shadow-2xl flex justify-center items-start">
              {/* Opening Lip */}
              <div className="w-20 sm:w-32 h-1 sm:h-1.5 bg-zinc-800 rounded-b-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
