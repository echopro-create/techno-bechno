'use client';

import { Monitor, Apple, Smartphone, Zap, Shield, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

function EcosystemBlueprint() {
  return (
    <div
      aria-hidden="true"
      className="mt-auto relative h-64 w-full overflow-hidden rounded-2xl border border-white/10"
      style={{
        backgroundImage:
          'radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 600 260" fill="none">
        <path d="M120 178C178 164 223 145 282 126" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        <path d="M298 114C352 108 397 98 448 86" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        <circle cx="120" cy="178" r="3.5" fill="rgba(255,255,255,0.28)" />
        <circle cx="282" cy="126" r="3.5" fill="rgba(255,255,255,0.28)" />
        <circle cx="448" cy="86" r="3.5" fill="rgba(255,255,255,0.28)" />
      </svg>

      <div className="absolute left-[10%] bottom-[12%] h-[46%] w-[19%] rounded-[1.7rem] border border-white/[0.15] bg-black/[0.35] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
        <div className="absolute left-1/2 top-2.5 h-1 w-10 -translate-x-1/2 rounded-full bg-white/[0.12]" />
        <div className="absolute inset-x-3 top-6 bottom-3 rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-3">
          <div className="h-2 rounded-full bg-white/[0.18]" />
          <div className="mt-3 h-10 rounded-[1rem] border border-white/[0.08] bg-white/[0.03]" />
          <div className="mt-2 h-5 rounded-full bg-white/[0.05]" />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="h-8 rounded-xl bg-white/[0.04]" />
            <div className="h-8 rounded-xl bg-white/[0.04]" />
          </div>
        </div>
      </div>

      <div className="absolute right-[12%] top-[12%] h-[50%] w-[29%] rounded-[1.8rem] border border-white/[0.15] bg-black/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
        <div className="absolute inset-x-4 top-4 bottom-4 rounded-[1.35rem] border border-white/10 bg-white/[0.02] p-4">
          <div className="flex gap-2">
            <div className="h-2 w-14 rounded-full bg-white/[0.18]" />
            <div className="h-2 w-8 rounded-full bg-white/10" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="col-span-2 h-20 rounded-[1.15rem] border border-white/[0.08] bg-white/[0.03]" />
            <div className="h-20 rounded-[1.15rem] bg-white/[0.04]" />
          </div>
          <div className="mt-3 h-8 rounded-2xl bg-white/[0.04]" />
        </div>
      </div>

      <div className="absolute bottom-[8%] left-1/2 h-[58%] w-[74%] -translate-x-1/2 transition-transform duration-500 group-hover:translate-y-1">
        <div className="absolute inset-x-[9%] top-0 h-[78%] rounded-[1.4rem] border border-white/[0.15] bg-black/[0.32] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
          <div className="absolute inset-x-5 top-5 bottom-5 rounded-[1rem] border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <div className="h-2 w-20 rounded-full bg-white/[0.18]" />
              <div className="h-2 w-10 rounded-full bg-white/10" />
            </div>
            <div className="mt-4 grid grid-cols-[1.5fr_0.9fr] gap-3">
              <div className="h-20 rounded-[1.15rem] border border-white/[0.08] bg-white/[0.03]" />
              <div className="space-y-3">
                <div className="h-8 rounded-2xl bg-white/[0.04]" />
                <div className="h-8 rounded-2xl bg-white/[0.04]" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="h-10 rounded-2xl bg-white/[0.04]" />
              <div className="h-10 rounded-2xl bg-white/[0.04]" />
              <div className="h-10 rounded-2xl bg-white/[0.04]" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[18%] rounded-[999px] border border-white/[0.12] bg-gradient-to-b from-white/[0.06] to-white/[0.02]" />
      </div>
    </div>
  );
}

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
                <EcosystemBlueprint />
              </div>
            </SpotlightCard>

            {/* Card 2: Square */}
            <SpotlightCard delay={0.1} className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-between">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Zap className="size-10 text-zinc-100/90" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">60 FPS</h3>
                  <p className="text-zinc-400 text-sm">Идеально плавные анимации и мгновенный отклик интерфейса.</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 3: Square */}
            <SpotlightCard delay={0.2} className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-between">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Shield className="size-10 text-zinc-100/90" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Безопасность</h3>
                  <p className="text-zinc-400 text-sm">Шифрование данных и соответствие строгим стандартам.</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 4: Wide */}
            <SpotlightCard delay={0.3} className="md:col-span-2 md:row-span-1 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-35 z-0"></div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <Sparkles className="size-8 text-zinc-100/90 mb-4" />
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
