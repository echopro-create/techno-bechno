'use client';

import { Monitor, Apple, Smartphone, Zap, Shield, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

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
                <div className="mt-auto relative w-full aspect-[16/9] md:aspect-auto md:h-64 rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src="/images/native-experience.png" 
                    alt="Нативный опыт и интеграции" 
                    className="w-full h-full object-cover object-center opacity-80 mix-blend-screen"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-white/5 rounded-2xl mix-blend-overlay"></div>
                </div>
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
