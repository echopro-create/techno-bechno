'use client';

import { Monitor, Apple, Smartphone, Zap, Shield, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

function NativeExperienceGraphic() {
  return (
    <div className="mt-8 md:mt-12 relative h-64 md:h-[22rem] w-full overflow-hidden rounded-2xl border border-white/10 flex items-center justify-center bg-[#0a0a0a] group perspective-[1000px]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-500/10 via-transparent to-transparent opacity-100 transition-opacity duration-1000 group-hover:from-zinc-400/15"></div>
      
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative w-full h-full flex flex-col items-center justify-center transform-style-preserve-3d transition-all duration-700 ease-out group-hover:scale-[1.03]">
        
        {/* MACBOOK (Left/Back) */}
        <div className="absolute z-10 left-[8%] md:left-[10%] top-[40%] md:top-[35%] w-[130px] md:w-[220px] h-[80px] md:h-[135px] rounded-t-lg md:rounded-t-xl border-[2px] md:border-[3px] border-zinc-700/40 bg-zinc-950/90 shadow-2xl flex flex-col p-1 md:p-1.5 transform -rotate-12 transition-all duration-700 group-hover:-rotate-6 group-hover:-translate-y-3 backdrop-blur-md">
          <div className="flex-1 rounded-sm border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-1.5 flex flex-col gap-1 md:gap-1.5 relative overflow-hidden">
             
             <div className="flex items-center gap-1.5 mb-1">
                <Monitor className="size-2 md:size-3 text-white/30" />
                <div className="h-1 md:h-1.5 w-1/3 rounded-full bg-white/10"></div>
             </div>
             <div className="flex gap-1 md:gap-1.5 h-full">
               <div className="w-1/4 h-full bg-white/5 rounded-sm"></div>
               <div className="flex-1 flex flex-col gap-1 md:gap-1.5">
                 <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-sm"></div>
                 <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-sm"></div>
                 <div className="h-1.5 md:h-2 w-2/3 bg-white/5 rounded-sm"></div>
               </div>
             </div>
          </div>
          {/* Keyboard base */}
          <div className="h-1.5 md:h-2.5 mt-0.5 bg-zinc-600 rounded-b-sm md:rounded-b-md relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 md:w-10 h-[1px] md:h-0.5 bg-zinc-800 rounded-b-sm"></div>
          </div>
        </div>

        {/* IPAD/TABLET (Center) */}
        <div className="absolute z-20 left-1/2 -translate-x-1/2 top-[10%] md:top-[8%] w-[120px] md:w-[180px] h-[170px] md:h-[250px] rounded-[1rem] md:rounded-[1.5rem] border-[3px] md:border-[4px] border-zinc-700/60 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col p-1.5 md:p-2.5 transition-transform duration-700 group-hover:-translate-y-6">
          <div className="flex-1 rounded-lg md:rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-2 md:p-3 flex flex-col gap-2 md:gap-3 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 blur-2xl rounded-full"></div>
            
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/10"></div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="h-1.5 md:h-2 w-1/2 rounded-full bg-white/10"></div>
                <div className="h-1 md:h-1.5 w-1/3 rounded-full bg-white/5"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-1.5 md:gap-2">
              <div className="h-10 md:h-16 rounded-md md:rounded-lg bg-white/5 relative overflow-hidden flex items-end p-1">
                 <div className="w-full h-[60%] bg-gradient-to-t from-white/15 to-transparent"></div>
              </div>
              <div className="h-10 md:h-16 rounded-md md:rounded-lg bg-white/5 flex items-end justify-center gap-1 p-1 md:p-1.5">
                 <div className="w-1.5 md:w-2.5 h-[30%] bg-white/20 rounded-t-sm group-hover:h-[60%] transition-all duration-500"></div>
                 <div className="w-1.5 md:w-2.5 h-[60%] bg-white/30 rounded-t-sm group-hover:h-[90%] transition-all duration-700"></div>
                 <div className="w-1.5 md:w-2.5 h-[40%] bg-white/20 rounded-t-sm group-hover:h-[70%] transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex-1 rounded-md md:rounded-lg bg-white/[0.02] border border-white/5 p-1.5 flex flex-col gap-1.5">
               <div className="h-1.5 md:h-2 w-3/4 rounded-full bg-white/10"></div>
               <div className="h-1 md:h-1.5 w-full rounded-full bg-white/5"></div>
               <div className="h-1 md:h-1.5 w-5/6 rounded-full bg-white/5"></div>
            </div>
          </div>
        </div>

        {/* IPHONE (Right/Front) */}
        <div className="absolute z-30 right-[8%] md:right-[15%] top-[40%] md:top-[30%] w-[70px] md:w-[100px] h-[140px] md:h-[200px] rounded-[1.2rem] md:rounded-[1.8rem] border-[3px] border-zinc-500/30 bg-zinc-950/80 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] flex flex-col p-1 md:p-1.5 transform rotate-12 transition-all duration-700 group-hover:rotate-6 group-hover:-translate-y-8">
          <div className="absolute top-0 inset-x-0 h-3 md:h-4 flex justify-center z-10">
            <div className="w-6 md:w-10 h-1.5 md:h-2 rounded-b-lg md:rounded-b-xl bg-zinc-800/80 absolute top-0"></div>
          </div>
          <div className="flex-1 mt-2 md:mt-3.5 rounded-[0.8rem] md:rounded-xl border border-white/5 bg-white/[0.02] p-1.5 flex flex-col gap-1.5 md:gap-2 relative overflow-hidden">
             <div className="h-1 md:h-1.5 w-1/2 rounded-full bg-white/10 relative z-10"></div>
             
             <div className="h-8 md:h-12 rounded-lg bg-white/5 relative z-10 flex items-center justify-center">
                 <Smartphone className="size-3 md:size-4 text-white/30" />
             </div>
             
             <div className="flex-1 rounded-lg bg-white/5"></div>
             
             <div className="h-5 md:h-8 border border-white/10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-md relative z-10">
               <div className="h-1 w-1/2 rounded-full bg-white/50 animate-pulse"></div>
             </div>
          </div>
        </div>

        {/* Floating Code Snippet Card */}
        <div className="absolute z-40 left-[15%] md:left-[22%] bottom-[12%] md:bottom-[15%] w-28 md:w-40 rounded-lg md:rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl p-2 md:p-3 transform -rotate-6 transition-all duration-700 group-hover:-rotate-12 group-hover:-translate-y-4 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100">
           <div className="flex items-center gap-1 md:gap-1.5 mb-1.5 md:mb-2">
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-400"></div>
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400"></div>
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400"></div>
           </div>
           <div className="space-y-1 md:space-y-1.5">
             <div className="h-1 md:h-1.5 w-full bg-blue-400/30 rounded-full"></div>
             <div className="h-1 md:h-1.5 w-3/4 bg-purple-400/30 rounded-full ml-1 md:ml-2"></div>
             <div className="h-1 md:h-1.5 w-4/5 bg-zinc-400/30 rounded-full ml-1 md:ml-2"></div>
             <div className="h-1 md:h-1.5 w-1/2 bg-zinc-400/30 rounded-full"></div>
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
            <SpotlightCard delay={0} className="md:col-span-2 md:row-span-2 p-6 sm:p-8 md:p-10 flex flex-col text-center md:text-left h-full">
              <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white font-display">Нативный опыт</h3>
              <p className="text-zinc-400 text-base md:text-lg max-w-sm mx-auto md:mx-0 mb-6 md:mb-10">Пользователи чувствуют себя как дома. Интерфейсы, которые понятны интуитивно и работают без сбоев.</p>
                <NativeExperienceGraphic />
              </div>
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
