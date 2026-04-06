'use client';

import { motion } from 'motion/react';
import { PROCESS_STEPS } from '@/lib/constants';

export function Process() {
  return (
    <section id="process" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3 md:sticky md:top-32 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-display text-balance text-center md:text-left">Как мы работаем</h2>
          <p className="text-xl text-zinc-400 text-pretty text-center md:text-left">Прозрачный процесс от первой встречи до релиза продукта.</p>
        </div>
        <div className="md:w-2/3 flex flex-col gap-24 pt-16 md:pt-0">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
              className="relative text-center md:text-left md:pl-16"
            >
              <div className="md:hidden text-2xl font-light text-zinc-600 font-mono mb-2">{step.num}</div>
              <div className="hidden md:block absolute left-0 top-0 text-3xl font-light text-zinc-600 font-mono">{step.num}</div>
              <h3 className="text-2xl md:text-4xl font-semibold mb-4 font-display">{step.title}</h3>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
