'use client';

import { Monitor, Apple, Smartphone, Zap, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { SpotlightCard } from './SpotlightCard';

export function Features() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Monitor className="size-10 mb-8 text-white" />,
                title: "Web Разработка",
                desc: "Современные веб-приложения на React и Next.js с невероятной производительностью и SEO."
              },
              {
                icon: <Apple className="size-10 mb-8 text-white" />,
                title: "iOS Разработка",
                desc: "Нативные приложения для iPhone и iPad с идеальным UI/UX и использованием последних API Apple."
              },
              {
                icon: <Smartphone className="size-10 mb-8 text-white" />,
                title: "Android Разработка",
                desc: "Kotlin-приложения, которые идеально работают на тысячах различных устройств."
              }
            ].map((service, i) => (
              <SpotlightCard key={i} delay={i * 0.1} className="p-12">
                <div className="relative z-10">
                  <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-display">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">{service.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="features" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-display text-balance">
              Продумано до мелочей.
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-pretty">
              Мы объединяем передовые технологии с безупречным дизайном, чтобы создавать продукты, которые хочется использовать каждый день.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {/* Card 1: Large */}
            <SpotlightCard delay={0} className="md:col-span-2 md:row-span-2 p-10 flex flex-col">
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-3xl font-semibold mb-4 text-white font-display">Экосистема Apple</h3>
                <p className="text-zinc-400 text-lg max-w-sm">Бесшовная интеграция между iOS, iPadOS и macOS. Ваши пользователи получат нативный опыт на любом устройстве.</p>
                <div className="mt-auto relative h-64 w-full rounded-2xl overflow-hidden border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop" 
                    alt="Ecosystem" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2: Square */}
            <SpotlightCard delay={0.1} className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-between">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Zap className="size-10 text-yellow-500/80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">60 FPS</h3>
                  <p className="text-zinc-400 text-sm">Идеально плавные анимации и мгновенный отклик интерфейса.</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 3: Square */}
            <SpotlightCard delay={0.2} className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-between">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Shield className="size-10 text-green-500/80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Безопасность</h3>
                  <p className="text-zinc-400 text-sm">Шифрование данных и соответствие строгим стандартам.</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 4: Wide */}
            <SpotlightCard delay={0.3} className="md:col-span-2 md:row-span-1 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-50 z-0"></div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <Sparkles className="size-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 font-display">Glassmorphism & Mesh</h3>
                <p className="text-zinc-400">Используем трендовые визуальные эффекты для создания глубины.</p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </>
  );
}
