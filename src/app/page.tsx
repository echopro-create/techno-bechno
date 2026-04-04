import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Monitor,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { FadeIn, HoverLift, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: {
    absolute: "Премиальная разработка сайтов и приложений",
  },
  description:
    "WebStudio создаёт сайты и цифровые продукты с сильной архитектурой, продуманной навигацией и строгой светлой/тёмной системой.",
};

const serviceTracks = [
  {
    title: "Сайты для брендов",
    description:
      "Многостраничные сайты и лендинги с чистой структурой, сильной типографикой и понятным пользовательским маршрутом.",
    price: "от 5 000 ₽",
    icon: Monitor,
  },
  {
    title: "Мобильные продукты",
    description:
      "Проектирование и запуск iOS/Android-интерфейсов, которые ощущаются как законченное цифровое приложение, а не набор экранов.",
    price: "от 80 000 ₽",
    icon: Smartphone,
  },
  {
    title: "Дизайн-система и сборка",
    description:
      "Единый язык компонентов, тем и состояний, чтобы проект выглядел цельно и масштабировался без визуального шума.",
    price: "по оценке",
    icon: Code2,
  },
];

const principles = [
  {
    title: "Иерархия вместо декора",
    description:
      "Сначала строим структуру и сценарии, и только потом доводим поверхность до премиального уровня.",
    icon: Zap,
  },
  {
    title: "Навигация без трения",
    description:
      "Важные действия остаются на виду, вторичные не спорят за внимание, мобильный опыт не упрощён до компромисса.",
    icon: ShieldCheck,
  },
  {
    title: "Сильная light/dark система",
    description:
      "Обе темы проектируются как самостоятельные состояния интерфейса, а не как механический инверт цвета.",
    icon: Monitor,
  },
];

const metrics = [
  { value: "01", label: "дизайн-язык на весь сайт" },
  { value: "44+", label: "pt hit-area для controls" },
  { value: "2", label: "полноценные темы без компромиссов" },
];

export default function Home() {
  return (
    <div className="page-shell mesh-bg">
      <section className="page-section content-layer pt-4 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <FadeIn className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-wrap gap-3">
              <span className="eyebrow">
                <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                Слоты на май 2026
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-[11ch] text-[clamp(3.2rem,7vw,6.4rem)] font-semibold">
                Делаем сайты и продукты, которые выглядят как законченная
                система.
              </h1>
              <p className="section-lead">
                Не просто “красивый лендинг”, а собранный интерфейс с премиальной
                навигацией, устойчивой light/dark-системой и читаемой
                архитектурой контента.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="action-primary">
                Обсудить проект
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="action-secondary">
                Смотреть кейсы
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="stat-card">
                  <p className="metric-value">{metric.value}</p>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="surface-card p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="section-kicker">Design Direction</p>
                <h2 className="text-2xl md:text-3xl">
                  Премиальный слой навигации поверх спокойного контента.
                </h2>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--foreground)] text-[color:var(--background)]">
                <Zap className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="surface-card-muted p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  Navigation
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Главная", "Услуги", "Кейсы", "Контакт"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--background-strong)] px-3 py-2 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface-card-muted p-5">
                  <p className="text-sm text-[color:var(--muted)]">Темы</p>
                  <p className="mt-2 text-xl font-semibold">
                    Light и Dark как отдельные состояния интерфейса
                  </p>
                </div>
                <div className="surface-card-muted p-5">
                  <p className="text-sm text-[color:var(--muted)]">Сценарии</p>
                  <p className="mt-2 text-xl font-semibold">
                    Контент не спорит с control layer за внимание
                  </p>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-[color:var(--foreground)] px-5 py-5 text-[color:var(--background)] shadow-[var(--shadow-strong)]">
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                  Подход
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white/88">
                  Сначала выстраиваем rhythm, spacing и порядок действий. Только
                  потом усиливаем атмосферу через material, tint и motion.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="page-section content-layer section-divider">
        <Reveal className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="space-y-4">
            <p className="section-kicker">Что мы проектируем</p>
            <h2 className="section-title">
              Три уровня продукта, а не только поверхность.
            </h2>
          </div>
          <p className="section-lead">
            Каждый проект собираем одновременно на уровне визуального языка,
            пользовательского потока и технической устойчивости. За счёт этого
            сайт ощущается дороже уже в первом экране и остаётся понятным дальше.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {serviceTracks.map((service, index) => {
            const Icon = service.icon;

            return (
              <HoverLift
                key={service.title}
                delay={index * 0.04}
                className="surface-card flex h-full flex-col p-6 md:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--background-muted)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-[color:var(--muted)]">
                    {service.price}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl">{service.title}</h3>
                <p className="mt-4 flex-1 text-[color:var(--muted)]">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-strong)]"
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </HoverLift>
            );
          })}
        </div>
      </section>

      <section className="page-section content-layer section-divider">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <p className="section-kicker">Почему это ощущается дороже</p>
            <h2 className="section-title">
              Сильный интерфейс читается быстро и не шумит.
            </h2>
            <p className="section-lead">
              Премиальность в 2026 определяется не количеством свечений, а тем,
              насколько уверенно сайт ведёт пользователя через контент и
              действия.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.05}
                  className="surface-card-muted flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--background-strong)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-[color:var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section content-layer">
        <Reveal className="rounded-[2rem] bg-[color:var(--foreground)] px-6 py-8 text-[color:var(--background)] shadow-[var(--shadow-strong)] md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="section-kicker text-white/70">Следующий шаг</p>
              <h2 className="max-w-[14ch] text-[clamp(2rem,4vw,4rem)]">
                Нужен сайт, который выглядит собранно и двигает пользователя
                вперёд.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/78">
                Подготовим структуру, визуальный язык и маршрут действий так,
                чтобы light и dark темы ощущались как один продуманный продукт.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-semibold text-[color:var(--foreground)]"
              >
                Написать нам
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-6 font-semibold text-white/88"
              >
                Посмотреть примеры
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
