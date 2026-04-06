'use client';

import { Monitor, Apple, Smartphone, Zap, Shield, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

function NativeExperienceGraphic() {
  return (
    <div className="absolute inset-0 pointer-events-none perspective-[1000px]">
      
      {/* Organic radial glow behind devices, no hard edges, tied directly to the cluster */}
      <div className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] h-[80%] md:h-[60%] border-0 bg-zinc-500/10 blur-[80px] md:blur-[120px] rounded-[100%] transition-opacity duration-1000 group-hover:bg-zinc-400/20 mix-blend-screen"></div>

      <div className="absolute inset-x-0 bottom-[-5%] md:bottom-[-10%] top-24 md:top-32 w-full flex flex-col items-center justify-center transform-style-preserve-3d transition-all duration-700 ease-out group-hover:scale-[1.03]">
        
        {/* MACBOOK (Left/Back) */}
        <div className="absolute z-10 left-[2%] md:left-[8%] top-[45%] md:top-[42%] w-[140px] md:w-[260px] h-[90px] md:h-[160px] rounded-t-lg md:rounded-t-2xl border-[2px] md:border-[3px] border-zinc-700/40 bg-zinc-950/95 shadow-2xl flex flex-col p-1.5 md:p-2 transform -rotate-[15deg] transition-all duration-700 group-hover:-rotate-[-5deg] group-hover:-translate-y-4 backdrop-blur-xl border-b-0">
          <div className="flex-1 rounded-sm md:rounded-md border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-1.5 md:p-2 flex flex-col gap-1.5 md:gap-2 relative overflow-hidden group-hover:bg-white/[0.05] transition-colors">
             
             <div className="flex items-center gap-1.5 mb-1 md:mb-2 text-white/40">
                <Monitor className="size-3 md:size-4" />
                <div className="h-1 md:h-1.5 w-1/3 rounded-full bg-white/10"></div>
             </div>
             <div className="flex gap-1.5 md:gap-2 h-full">
               <div className="w-[30%] h-full bg-white/5 rounded-[4px]"></div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-2">
                 <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-sm"></div>
                 <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-sm"></div>
                 <div className="h-1.5 md:h-2 w-2/3 bg-white/5 rounded-sm"></div>
               </div>
             </div>
          </div>
          {/* Keyboard base */}
          <div className="h-2 md:h-3 mt-0.5 md:mt-1 bg-zinc-600 rounded-b-md relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-12 h-[1px] md:h-[2px] bg-zinc-800 rounded-b-sm"></div>
          </div>
        </div>

        {/* IPAD/TABLET (Center) */}
        <div className="absolute z-20 left-1/2 -translate-x-1/2 top-[15%] md:top-[12%] w-[130px] md:w-[200px] h-[180px] md:h-[280px] rounded-[1.2rem] md:rounded-[1.8rem] border-[3px] md:border-[4px] border-zinc-700/60 bg-black shadow-[0_30px_60px_rgba(0,0,0,0.9)] flex flex-col p-1.5 md:p-2.5 transition-transform duration-700 group-hover:-translate-y-8">
          <div className="flex-1 rounded-[0.9rem] md:rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-2 md:p-3 flex flex-col gap-2 md:gap-4 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 blur-[30px] rounded-full mix-blend-screen"></div>
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-white/10"></div>
              <div className="flex flex-col gap-1 md:gap-1.5 flex-1">
                <div className="h-1.5 md:h-2 w-[60%] rounded-full bg-white/10"></div>
                <div className="h-1 md:h-1.5 w-[40%] rounded-full bg-white/5"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="h-12 md:h-20 rounded-md md:rounded-lg bg-white/5 relative overflow-hidden flex items-end p-1.5">
                 <div className="w-full h-[60%] bg-gradient-to-t from-white/15 to-transparent rounded-t-sm"></div>
              </div>
              <div className="h-12 md:h-20 rounded-md md:rounded-lg bg-white/5 flex items-end justify-center gap-1.5 p-1.5 md:p-2">
                 <div className="w-2 md:w-3 h-[40%] bg-white/20 rounded-t-sm group-hover:h-[60%] transition-all duration-500"></div>
                 <div className="w-2 md:w-3 h-[70%] bg-white/30 rounded-t-sm group-hover:h-[90%] transition-all duration-700 delay-75"></div>
                 <div className="w-2 md:w-3 h-[50%] bg-white/20 rounded-t-sm group-hover:h-[80%] transition-all duration-300 delay-150"></div>
              </div>
            </div>

            <div className="flex-1 rounded-md md:rounded-lg bg-white/[0.02] border border-white/5 p-2 md:p-2.5 flex flex-col gap-1.5 md:gap-2">
               <div className="h-1.5 md:h-2 w-[80%] rounded-full bg-white/10"></div>
               <div className="h-1 md:h-1.5 w-full rounded-full bg-white/5"></div>
               <div className="h-1 md:h-1.5 w-[90%] rounded-full bg-white/5"></div>
            </div>
          </div>
        </div>

        {/* IPHONE (Right/Front) */}
        <div className="absolute z-30 right-[5%] md:right-[15%] top-[45%] md:top-[37%] w-[80px] md:w-[120px] h-[160px] md:h-[240px] rounded-[1.5rem] md:rounded-[2.2rem] border-[3px] md:border-[4px] border-zinc-500/30 bg-zinc-950/80 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.95)] flex flex-col p-1.5 md:p-2 transform rotate-[15deg] transition-all duration-700 group-hover:rotate-[8deg] group-hover:-translate-y-10">
          <div className="absolute top-0 inset-x-0 h-3 md:h-5 flex justify-center z-10">
            <div className="w-8 md:w-12 h-1.5 md:h-2.5 rounded-b-xl bg-zinc-800/90 absolute top-0"></div>
          </div>
          <div className="flex-1 mt-2.5 md:mt-4 rounded-[1rem] md:rounded-[1.4rem] border border-white/5 bg-white/[0.02] p-1.5 md:p-2.5 flex flex-col gap-2 md:gap-3 relative overflow-hidden backdrop-blur-md">
             <div className="h-1.5 md:h-2 w-[60%] rounded-full bg-white/10 relative z-10"></div>
             
             <div className="h-10 md:h-16 rounded-[0.6rem] bg-gradient-to-br from-white/10 to-white/5 relative z-10 flex items-center justify-center">
                 <Smartphone className="size-4 md:size-5 text-white/30" />
             </div>
             
             <div className="flex-1 rounded-[0.6rem] bg-white/5"></div>
             
             <div className="h-8 md:h-12 border border-white/10 rounded-[0.6rem] bg-white/10 flex items-center justify-center backdrop-blur-md relative z-10">
               <div className="h-1.5 md:h-2 w-[60%] rounded-full bg-white/50 animate-pulse"></div>
             </div>
          </div>
        </div>

        {/* Floating Code Snippet Card */}
        <div className="absolute z-40 left-[20%] md:left-[25%] bottom-[20%] md:bottom-[25%] w-32 md:w-48 rounded-[0.8rem] md:rounded-xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl p-2.5 md:p-3.5 transform -rotate-6 transition-all duration-700 group-hover:-rotate-12 group-hover:-translate-y-6 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
           <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
             <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
             <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400"></div>
             <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div>
           </div>
           <div className="space-y-1.5 md:space-y-2">
             <div className="h-1.5 md:h-2 w-full bg-blue-400/30 rounded-full"></div>
             <div className="h-1.5 md:h-2 w-[80%] bg-purple-400/30 rounded-full ml-2 md:ml-3"></div>
             <div className="h-1.5 md:h-2 w-[90%] bg-zinc-400/30 rounded-full ml-2 md:ml-3"></div>
             <div className="h-1.5 md:h-2 w-[60%] bg-zinc-400/30 rounded-full"></div>
           </div>
        </div>

      </div>
    </div>
  );
}

export function Features() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Monitor className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
                title: "Веб-разработка",
                desc: "Современные веб-приложения на React и Next.js с невероятной производительностью и SEO."
              },
              {
                icon: <Apple className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
                title: "iOS-разработка",
                desc: "Нативные приложения для iPhone и iPad с идеальным UI/UX и использованием последних API Apple."
              },
              {
                icon: <Smartphone className="size-8 sm:size-9 md:size-10 mb-6 md:mb-8 text-white" />,
                title: "Android-разработка",
                desc: "Kotlin-приложения, которые идеально работают на тысячах различных устройств."
              }
            ].map((service, i) => (
              <SpotlightCard key={service.title} delay={i * 0.1} className="p-6 sm:p-8 md:p-10 lg:p-12 h-full text-center md:text-left">
                <div className="relative z-10 h-full flex flex-col justify-between items-center md:items-start">
                  <div>
                    <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 flex justify-center md:block">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 font-display">{service.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-base md:text-lg">{service.desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="features" className="pt-12 md:pt-16 lg:pt-20 pb-24 md:pb-28 lg:pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-14 lg:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-display text-balance text-center">
              Продумано до мелочей
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto text-pretty text-center">
              Мы объединяем передовые технологии с безупречным дизайном, чтобы создавать продукты, которые хочется использовать каждый день.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(240px,auto)] md:auto-rows-[280px]">
            {/* Card 1: Large */}
            <SpotlightCard delay={0} className="md:col-span-2 md:row-span-2 overflow-hidden flex flex-col text-center md:text-left h-full group p-0 relative border border-white/5">
              <div className="relative z-20 p-6 sm:p-8 md:p-10 flex flex-col pointer-events-none">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white font-display pointer-events-auto drop-shadow-md">Нативный опыт</h3>
                <p className="text-zinc-400 text-base md:text-lg max-w-sm mx-auto md:mx-0 mb-6 pointer-events-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mix-blend-plus-lighter">Пользователи чувствуют себя как дома. Интерфейсы, которые понятны интуитивно и работают без сбоев.</p>
              </div>
              <NativeExperienceGraphic />
            </SpotlightCard>

            {/* Card 2: Square */}
            <SpotlightCard delay={0.1} className="md:col-span-1 md:row-span-1 p-6 sm:p-8 flex flex-col justify-between text-center md:text-left">
              <div className="relative z-10 h-full flex flex-col justify-between items-center md:items-start">
                <Zap className="size-10 text-zinc-100/90" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Мгновенная работа</h3>
                  <p className="text-zinc-400 text-sm">Никаких задержек. Интерфейс реагирует сразу, клиенты не уходят из-за «тормозов».</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 3: Square */}
            <SpotlightCard delay={0.2} className="md:col-span-1 md:row-span-1 p-6 sm:p-8 flex flex-col justify-between text-center md:text-left">
              <div className="relative z-10 h-full flex flex-col justify-between items-center md:items-start">
                <Shield className="size-10 text-zinc-100/90" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Безопасность</h3>
                  <p className="text-zinc-400 text-sm">Шифрование данных и соответствие строгим стандартам.</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 4: Wide */}
            <SpotlightCard delay={0.3} className="md:col-span-2 md:row-span-1 p-6 sm:p-8 text-center md:text-left">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-35 z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-between items-center md:items-start">
                <Sparkles className="size-10 text-zinc-100/90" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 font-display">Премиальный дизайн</h3>
                  <p className="text-zinc-400">Выделяемся среди конкурентов. Современный визуал, который вызывает доверие с первого взгляда.</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </>
  );
}
