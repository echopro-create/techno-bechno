import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Monitor, Smartphone, Zap } from "lucide-react";
import { FadeIn, HoverLift, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: {
    absolute: "Создание сайтов и мобильных приложений | Заказать сайт под ключ",
  },
  description:
    "Разработка современных сайтов и мобильных приложений (iOS, Android) для малого бизнеса и частных лиц. Премиум-дизайн по доступной цене от 5000 руб.",
};

const reasons = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Чистый код",
    desc: "Используем современный стек для максимальной скорости.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Без скрытых цен",
    desc: "Фиксированная стоимость до начала работы.",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Pixel Perfect",
    desc: "Идеальное отображение на всех устройствах.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Под ключ",
    desc: "От дизайна до релиза в App Store.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center mesh-bg min-h-screen">
      <section className="w-full px-6 py-32 md:py-56 flex flex-col items-center text-center relative overflow-hidden">
        <div className="z-10 flex flex-col items-center w-full relative">
          <FadeIn className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--card)] border border-[color:var(--border)] text-sm font-medium mb-10 shadow-sm glass-panel">
            <span className="w-2 h-2 rounded-full bg-[color:var(--accent)] animate-pulse" />
            Доступна разработка на май 2026
          </FadeIn>

          <FadeIn delay={0.1} className="max-w-5xl mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
              <span className="text-gradient">Создаем продукты,</span>
              <br />
              которые работают.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="max-w-2xl mb-12">
            <p className="text-xl md:text-2xl text-[color:var(--muted)] font-medium leading-relaxed">
              Премиальный дизайн и безупречный код по доступной цене. От
              сайтов-визиток до сложных нативных iOS и Android приложений.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.3}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-20"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-[color:var(--foreground)] text-[color:var(--background)] rounded-full font-medium text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-black/10 dark:shadow-white/5"
            >
              Начать проект
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 glass-panel rounded-full font-medium text-lg hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] transition-all flex items-center justify-center duration-300"
            >
              Смотреть работы
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="w-full max-w-7xl px-6 py-32 z-10 relative">
        <Reveal className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Наши услуги
          </h2>
          <p className="text-2xl text-[color:var(--muted)] max-w-2xl mx-auto">
            Профессиональные решения для любых задач микробизнеса.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HoverLift className="group p-10 md:p-12 rounded-[2.5rem] glass-panel transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5">
            <Monitor className="w-14 h-14 mb-8 text-[color:var(--accent)]" />
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Веб-сайты</h3>
            <p className="text-[color:var(--muted)] mb-10 leading-relaxed text-lg">
              Быстрые, адаптивные и SEO-оптимизированные сайты-визитки и
              лендинги, которые привлекают клиентов и формируют доверие.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl">от 5 000 ₽</span>
              <Link
                href="/services"
                className="w-12 h-12 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </HoverLift>

          <HoverLift
            delay={0.1}
            className="group p-10 md:p-12 rounded-[2.5rem] glass-panel transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
          >
            <Smartphone className="w-14 h-14 mb-8 text-[color:var(--accent)]" />
            <h3 className="text-3xl font-bold mb-4 tracking-tight">
              Мобильные приложения
            </h3>
            <p className="text-[color:var(--muted)] mb-10 leading-relaxed text-lg">
              Нативная и кроссплатформенная разработка для iOS и Android с
              невероятно плавным и продуманным интерфейсом.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl">от 80 000 ₽</span>
              <Link
                href="/services"
                className="w-12 h-12 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </HoverLift>
        </div>
      </section>

      <section className="w-full max-w-7xl px-6 py-32 border-t border-[color:var(--border)]/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Почему мы?
            </h2>
            <p className="text-xl text-[color:var(--muted)] leading-relaxed mb-8">
              Мы не используем шаблонные решения. Каждый проект создается с
              нуля, с фокусом на типографику, анимации и конверсию. Мы делаем
              премиальный уровень дизайна доступным.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {reasons.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[color:var(--card)] border border-[color:var(--border)] flex items-center justify-center mb-5 text-[color:var(--foreground)] shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[color:var(--muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-32 mt-16 text-center relative overflow-hidden">
        <Reveal className="relative z-10 max-w-4xl mx-auto glass-panel p-16 rounded-[3rem] shadow-xl shadow-black/5 dark:shadow-white/5">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Готовы обсудить проект?
          </h2>
          <p className="text-xl md:text-2xl text-[color:var(--muted)] max-w-2xl mx-auto mb-12">
            Оставьте заявку, и мы бесплатно проконсультируем вас по архитектуре
            и стоимости.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-5 bg-[color:var(--foreground)] text-[color:var(--background)] rounded-full font-medium text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 dark:shadow-white/5"
          >
            Написать нам
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
