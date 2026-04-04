import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { FadeIn, HoverLift, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: "Услуги и цены на создание сайтов и приложений",
  description:
    "Тарифы WebStudio: сайты, многостраничные проекты и мобильные приложения с премиальной навигацией и сильной дизайн-системой.",
};

const services = [
  {
    title: "Сайт-визитка",
    price: "от 5 000 ₽",
    description:
      "Для экспертов, студий и локальных брендов, которым нужен аккуратный digital-first entry point без визуального шума.",
    features: [
      "Премиальный first screen и типографика",
      "Адаптивная light/dark-подготовка",
      "Базовая SEO-структура",
      "Форма связи и маршрут CTA",
      "Срок: от 3 до 5 дней",
    ],
  },
  {
    title: "Корпоративный сайт",
    price: "от 25 000 ₽",
    description:
      "Для компаний, которым важны масштабируемая структура, доверие и ощущение цельного продукта на всех страницах.",
    features: [
      "Архитектура до 10 экранов и разделов",
      "Контентные и сервисные шаблоны",
      "Навигационная система и CTA-иерархия",
      "Подготовка к CMS, аналитике и CRM",
      "Срок: от 2 недель",
    ],
    featured: true,
  },
  {
    title: "Мобильное приложение",
    price: "от 80 000 ₽",
    description:
      "Для продуктов, которым нужна уже не просто витрина, а полноценный пользовательский сценарий внутри iOS/Android.",
    features: [
      "Архитектура и user flow",
      "Система экранов и состояний",
      "Подключение backend/API и данных",
      "Подготовка к релизу в stores",
      "Срок: от 1.5 месяцев",
    ],
  },
];

const includedValues = [
  {
    title: "Читаемая структура",
    description:
      "Контент разбит на понятные блоки, первичные действия выделены, вторичные не спорят за внимание.",
  },
  {
    title: "Сильная тема и контраст",
    description:
      "Светлая и тёмная темы собираются как самостоятельные состояния интерфейса с честной читаемостью.",
  },
  {
    title: "Адаптивный ритм",
    description:
      "Композиция не разваливается между desktop и mobile, а масштабируется через общий анатомический каркас.",
  },
];

export default function ServicesPage() {
  return (
    <div className="page-shell mesh-bg">
      <section className="page-section content-layer pt-4 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <FadeIn className="space-y-5">
            <p className="section-kicker">Услуги</p>
            <h1 className="max-w-[12ch] text-[clamp(3rem,6vw,5.7rem)] font-semibold">
              Прозрачные форматы без шумных пакетов и случайных опций.
            </h1>
            <p className="section-lead">
              Стоимость определяется не количеством украшений, а качеством
              архитектуры, навигации и темизации. Поэтому в каждом тарифе есть
              базовый premium-слой, а не только “дизайн сверху”.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="surface-card p-6 md:p-7">
            <p className="section-kicker">Pricing Logic</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="surface-card-muted p-5">
                <p className="text-sm text-[color:var(--muted)]">Что влияет</p>
                <p className="mt-2 text-lg font-semibold">
                  глубина структуры, количество шаблонов, дизайн-система,
                  интеграции
                </p>
              </div>
              <div className="surface-card-muted p-5">
                <p className="text-sm text-[color:var(--muted)]">Что не делаем</p>
                <p className="mt-2 text-lg font-semibold">
                  не продаём “премиум” только через blur, тени и большие заголовки
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="page-section content-layer">
        <div className="grid gap-5 xl:grid-cols-3">
          {services.map((service, index) => (
            <HoverLift
              key={service.title}
              delay={index * 0.04}
              className={
                service.featured
                  ? "rounded-[2rem] bg-[color:var(--foreground)] p-7 text-[color:var(--background)] shadow-[var(--shadow-strong)]"
                  : "surface-card p-7"
              }
            >
              {service.featured ? (
                <div className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-semibold text-white">
                  <Star className="h-4 w-4 fill-current" />
                  Частый выбор
                </div>
              ) : null}

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-3xl">{service.title}</h2>
                  <span
                    className={`rounded-full px-3 py-2 text-sm font-semibold ${
                      service.featured
                        ? "bg-white/10 text-white"
                        : "bg-[color:var(--background-muted)] text-[color:var(--muted-strong)]"
                    }`}
                  >
                    {service.price}
                  </span>
                </div>

                <p
                  className={
                    service.featured
                      ? "text-white/76"
                      : "text-[color:var(--muted)]"
                  }
                >
                  {service.description}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        service.featured
                          ? "text-white/72"
                          : "text-[color:var(--accent-strong)]"
                      }`}
                    />
                    <span
                      className={
                        service.featured
                          ? "text-white/88"
                          : "text-[color:var(--muted-strong)]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold ${
                  service.featured
                    ? "bg-white text-[color:var(--foreground)]"
                    : "bg-[color:var(--foreground)] text-[color:var(--background)]"
                }`}
              >
                Выбрать формат
                <ArrowRight className="h-4 w-4" />
              </Link>
            </HoverLift>
          ))}
        </div>
      </section>

      <section className="page-section content-layer section-divider">
        <Reveal className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="space-y-4">
            <p className="section-kicker">Во всех проектах</p>
            <h2 className="section-title">
              Базовые стандарты, которые не продаются как допы.
            </h2>
          </div>
          <p className="section-lead">
            Если сайт должен выглядеть цельно и дорого, нельзя убирать в
            дополнительные услуги читаемость, адаптивность и нормальный маршрут
            действий. Это фундамент, а не апгрейд.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {includedValues.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="surface-card-muted p-6"
            >
              <p className="section-kicker">{`0${index + 1}`}</p>
              <h3 className="mt-4 text-2xl">{item.title}</h3>
              <p className="mt-3 text-[color:var(--muted)]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
