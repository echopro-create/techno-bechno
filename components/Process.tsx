'use client';

import { motion } from 'motion/react';
import { PROCESS_STEPS } from '@/lib/constants';

function ProcessGraphic() {
  return (
    <div className="mt-16 hidden lg:block relative w-full h-[280px] perspective-[1000px] group cursor-default">
      {/* Ambient Glow */}
      <div className="absolute inset-x-0 bottom-0 top-1/4 bg-blue-500/10 blur-[80px] rounded-[100%] transition-opacity duration-1000 opacity-50 group-hover:opacity-100 mix-blend-screen"></div>

      {/* Main IDE Window */}
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] rounded-xl flex flex-col transform rotate-[-4deg] transition-all duration-700 group-hover:rotate-[0deg] group-hover:scale-105 z-10 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
          </div>
          <span className="font-mono text-[10px] text-zinc-500 mr-2">process.ts</span>
        </div>

        {/* Code View */}
        <div className="flex-1 p-4 font-mono text-xs leading-[1.6] text-zinc-300 overflow-hidden flex flex-col text-left">
           <div className="flex">
             <span className="text-zinc-600 mr-4 select-none text-right w-4">1</span>
             <span className="text-pink-400">async function</span>&nbsp;
             <span className="text-blue-400">buildProduct</span>() {'{'}
           </div>
           
           <div className="flex">
             <span className="text-zinc-600 mr-4 select-none text-right w-4">2</span>
             <span className="ml-4 text-pink-400">const</span>&nbsp;
             <span className="text-zinc-200">strategy</span>&nbsp;=&nbsp;
             <span className="text-pink-400">await</span>&nbsp;
             <span className="text-yellow-200">research</span>();
           </div>
           
           <div className="flex">
             <span className="text-zinc-600 mr-4 select-none text-right w-4">3</span>
             <span className="ml-4 text-pink-400">const</span>&nbsp;
             <span className="text-zinc-200">design</span>&nbsp;=&nbsp;
             <span className="text-yellow-200">createUX</span>(strategy);
           </div>

           <div className="flex">
             <span className="text-zinc-600 mr-4 select-none text-right w-4">4</span>
             <span className="ml-4 text-pink-400">const</span>&nbsp;
             <span className="text-zinc-200">app</span>&nbsp;=&nbsp;
             <span className="text-pink-400">await</span>&nbsp;
             <span className="text-yellow-200">develop</span>(design);
           </div>

           <div className="flex">
             <span className="text-zinc-600 mr-4 select-none text-right w-4">5</span>
             <span className="ml-4 text-pink-400">return</span>&nbsp;
             <span className="text-green-300">launch</span>(app);
           </div>
           
           <div className="flex">
             <span className="text-zinc-600 mr-4 select-none text-right w-4">6</span>
             <span className="text-zinc-300">{'}'}</span>
           </div>
           
           <div className="flex mt-1 items-center">
             <span className="text-zinc-600 mr-4 select-none text-right w-4">7</span>
             <span className="text-zinc-400 animate-pulse">_</span>
           </div>
        </div>
      </div>

      {/* Floating Status Card */}
      <div className="absolute -left-6 top-[30%] bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-lg py-2 px-3 flex items-center gap-2 transform -rotate-[12deg] transition-all duration-700 group-hover:-rotate-[18deg] group-hover:-translate-x-3 group-hover:-translate-y-2 shadow-2xl z-20">
         <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
         <span className="font-mono text-[10px] text-zinc-300">100% Type Safe</span>
      </div>

      {/* Floating Speed Card */}
      <div className="absolute -right-6 bottom-[25%] w-24 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-lg p-2.5 flex flex-col gap-1.5 transform rotate-[15deg] transition-all duration-700 group-hover:rotate-[8deg] group-hover:translate-x-3 group-hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-20">
         <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest leading-none">Speed</span>
         <div className="flex gap-1 items-end h-5">
            <div className="w-1.5 h-full bg-white/5 rounded-sm"></div>
            <div className="w-1.5 h-full bg-white/5 rounded-sm"></div>
            <div className="w-1.5 h-[40%] bg-blue-500 rounded-sm group-hover:h-full transition-all duration-700 delay-100"></div>
            <div className="w-1.5 h-[60%] bg-purple-500 rounded-sm group-hover:h-full transition-all duration-700 delay-200"></div>
            <div className="w-1.5 h-[80%] bg-green-500 rounded-sm shadow-[0_0_8px_rgba(34,197,94,0.6)] group-hover:h-full transition-all duration-700 delay-300"></div>
         </div>
      </div>

    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-32 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-display text-balance text-center lg:text-left">Как мы работаем</h2>
          <p className="text-xl text-zinc-400 text-pretty text-center lg:text-left">Прозрачный процесс от первой встречи до релиза продукта.</p>
          <ProcessGraphic />
        </div>
        <div className="lg:w-2/3 flex flex-col gap-24 pt-12 lg:pt-0">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
              className="relative text-center md:text-left md:pl-16 group"
            >
              <div className="md:hidden text-2xl font-light text-zinc-600 font-mono mb-2 transition-colors duration-500 group-hover:text-zinc-400">{step.num}</div>
              <div className="hidden md:block absolute left-0 top-0 text-3xl font-light text-zinc-600 font-mono transition-colors duration-500 group-hover:text-zinc-400">{step.num}</div>
              <h3 className="text-2xl md:text-4xl font-semibold mb-4 font-display">{step.title}</h3>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
