import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { FadeIn, HoverLift, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: "Услуги и цены на создание сайтов и приложений",
  description:
    "Узнайте стоимость разработки сайта или мобильного приложения. Прозрачные тарифы, создание сайтов-визиток от 5000 рублей. Без скрытых платежей.",
};

const services = [
  {
    title: "Сайт-визитка",
    price: "от 5 000 ₽",
    desc: "Идеальный старт для экспертов и микробизнеса. Одна страница, которая продает.",
    features: [
      "Индивидуальный премиум-дизайн",
      "Адаптация под мобильные устройства",
      "Базовая SEO-оптимизация",
      "Форма обратной связи",
      "Срок: от 3 до 5 дней",
    ],
  },
  {
    title: "Корпоративный сайт",
    price: "от 25 000 ₽",
    desc: "Полноценное представительство вашей компании в интернете. Многостраничный сайт.",
    features: [
      "Сложная структура (до 10 страниц)",
      "Продуманный UI/UX дизайн",
      "Система управления контентом (CMS)",
      "Интеграция с аналитикой и CRM",
      "Срок: от 2 недель",
    ],
    popular: true,
  },
  {
    title: "Мобильное приложение",
    price: "от 80 000 ₽",
    desc: "Разработка нативных и кроссплатформенных приложений для iOS и Android.",
    features: [
      "Проектирование архитектуры и API",
      "Дизайн интерфейсов (iOS/Android)",
      "Разработка логики и базы данных",
      "Публикация в App Store и Google Play",
      "Срок: от 1.5 месяцев",
    ],
  },
];

const includedValues = [
  {
    icon: "⚡️",
    title: "Техническая SEO-оптимизация",
    desc: "Правильные метатеги, микроразметка, быстрая загрузка и чистый код, который любят поисковые системы Google и Яндекс.",
  },
  {
    icon: "📱",
    title: "Адаптивный дизайн",
    desc: "Ваш продукт будет идеально смотреться и функционировать на экранах любых размеров: от смартфона до 4K-монитора.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center pb-32 mesh-bg min-h-screen">
      <section className="w-full px-6 pt-32 pb-24 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Прозрачные тарифы.
            <br />
            <span className="text-gradient">Никаких скрытых платежей.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
            Мы создаем качественные IT-продукты, которые окупаются. Выберите
            подходящий формат для вашей задачи.
          </p>
        </FadeIn>
      </section>

      <section className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {services.map((service, index) => (
            <HoverLift
              key={service.title}
              delay={index * 0.1}
              lift={-8}
              className={`p-10 rounded-[2.5rem] flex flex-col relative transition-all duration-500 shadow-xl ${service.popular
                ? "bg-[color:var(--foreground)] text-[color:var(--background)] shadow-2xl scale-100 lg:scale-105 z-10 py-12"
                : "bg-[color:var(--card)]/50 backdrop-blur-xl border border-[color:var(--border)] shadow-black/5"
                }`}
            >
              {service.popular ? (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[color:var(--accent)] text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-[color:var(--accent)]/30">
                  <Star className="w-3 h-3 fill-current" />
                  Частый выбор
                </div>
              ) : null}

              <h3
                className={`text-2xl font-bold mb-3 tracking-tight ${service.popular ? "text-[color:var(--background)]" : ""}`}
              >
                {service.title}
              </h3>
              <p
                className={`text-base mb-8 leading-relaxed min-h-[60px] ${service.popular
                  ? "text-[color:var(--background)]/80"
                  : "text-[color:var(--muted)]"
                  }`}
              >
                {service.desc}
              </p>

              <div className="mb-10">
                <span
                  className={`text-5xl font-bold tracking-tight ${service.popular ? "text-[color:var(--background)]" : ""}`}
                >
                  {service.price}
                </span>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${service.popular
                        ? "text-[color:var(--background)]/60"
                        : "text-[color:var(--accent)]"
                        }`}
                    />
                    <span
                      className={`text-base leading-snug ${service.popular
                        ? "text-[color:var(--background)]/90"
                        : "opacity-90"
                        }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full py-5 rounded-full font-medium text-lg text-center transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${service.popular
                  ? "bg-[color:var(--background)] text-[color:var(--foreground)] hover:shadow-lg hover:shadow-white/20"
                  : "bg-[color:var(--foreground)] text-[color:var(--background)] hover:shadow-lg hover:shadow-[color:var(--foreground)]/20"
                  }`}
              >
                Выбрать тариф
                <ArrowRight className="w-5 h-5" />
              </Link>
            </HoverLift>
          ))}
        </div>
      </section>

      <section className="w-full max-w-5xl px-6 mt-40">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Что всегда входит в стоимость
          </h2>
          <p className="text-xl text-[color:var(--muted)]">
            Стандарты качества, от которых мы не отступаем.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {includedValues.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.1}
              className="p-10 rounded-[2rem] bg-[color:var(--card)]/50 backdrop-blur-xl border border-[color:var(--border)] hover:border-[color:var(--foreground)]/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[color:var(--border)]/50 flex items-center justify-center mb-6">
                <span className="text-xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[color:var(--muted)] text-lg leading-relaxed">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
