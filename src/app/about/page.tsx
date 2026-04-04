import type { Metadata } from "next";
import { ShieldCheck, Target, Users, Zap } from "lucide-react";
import { FadeIn, HoverLift, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: "О студии",
  description:
    "Подход WebStudio: премиальная навигация, строгая структура контента и системная работа с визуальным языком, а не поверхностный декор.",
};

const principles = [
  {
    title: "Фокус",
    description:
      "Каждый экран должен подталкивать к следующему действию, а не просто доказывать, что он красиво нарисован.",
    icon: Target,
  },
  {
    title: "Скорость",
    description:
      "Двигаемся быстро за счёт чёткой структуры, а не за счёт компромиссов в читаемости и навигации.",
    icon: Zap,
  },
  {
    title: "Надёжность",
    description:
      "Думаем не только о first impression, но и о том, как интерфейс переживает масштабирование и новые разделы.",
    icon: ShieldCheck,
  },
  {
    title: "Партнёрство",
    description:
      "Работаем как продуктовая команда рядом с клиентом: показываем trade-off, а не прячем их за красивыми словами.",
    icon: Users,
  },
];

const faqs = [
  {
    question: "Чем вы отличаетесь от обычного лендинг-подхода?",
    answer:
      "Мы строим сайт как систему: сначала продумываем порядок контента, уровни действий и тему, а затем уже усиливаем атмосферу визуалом.",
  },
  {
    question: "Если проект маленький, premium-подход всё равно нужен?",
    answer:
      "Да. Даже компактный сайт выигрывает от хорошей иерархии, контраста, ритма и продуманной навигации. Именно это создаёт ощущение качества.",
  },
  {
    question: "Вы работаете только с дизайном или и с реализацией?",
    answer:
      "Закрываем полный цикл: структура, визуальный язык, front-end и подготовка к интеграциям. За счёт этого дизайн не разваливается на этапе кода.",
  },
];

const metrics = [
  { value: "120+", label: "экранированных сценариев и интерфейсных блоков в накопленной библиотеке решений" },
  { value: "2", label: "полноценные темы, которые проектируются параллельно, а не после релиза" },
  { value: "1", label: "единый маршрут внимания на desktop и mobile" },
];

export default function AboutPage() {
  return (
    <div className="page-shell mesh-bg">
      <section className="page-section content-layer pt-4 md:pt-10">
        <FadeIn className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="section-kicker">О студии</p>
            <h1 className="max-w-[12ch] text-[clamp(3rem,6vw,5.7rem)] font-semibold">
              Делаем премиальный digital-опыт доступным и понятным.
            </h1>
            <p className="section-lead">
              Мы не пытаемся “сделать как Apple” на уровне внешних эффектов. Нас
              интересует то, за счёт чего интерфейс ощущается собранным:
              структура, порядок действий, контраст и дисциплина в деталях.
            </p>
          </div>

          <div className="surface-card p-6 md:p-7">
            <p className="section-kicker">Working Model</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="surface-card-muted p-5">
                <p className="text-sm text-[color:var(--muted)]">Не делаем</p>
                <p className="mt-2 text-lg font-semibold">
                  бесконечные вариации без общего design logic
                </p>
              </div>
              <div className="surface-card-muted p-5">
                <p className="text-sm text-[color:var(--muted)]">Делаем</p>
                <p className="mt-2 text-lg font-semibold">
                  короткие итерации с понятными критериями качества
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="page-section content-layer">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <Reveal className="space-y-4">
            <p className="section-kicker">Принципы</p>
            <h2 className="section-title">
              Хороший интерфейс не объясняет себя, а ведёт дальше.
            </h2>
          </Reveal>
          <Reveal className="section-lead">
            В центре внимания не ornament, а то, как быстро пользователь
            понимает страницу, различает уровни важности и видит следующий шаг.
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <HoverLift
                key={item.title}
                delay={index * 0.05}
                className="surface-card flex h-full flex-col gap-5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--background-muted)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 text-[color:var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </HoverLift>
            );
          })}
        </div>
      </section>

      <section className="page-section content-layer section-divider">
        <Reveal className="space-y-4">
          <p className="section-kicker">Trust Signals</p>
          <h2 className="section-title">Показываем надёжность через систему, а не через шум.</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {metrics.map((metric) => (
            <Reveal key={metric.label} className="surface-card-muted p-6">
              <p className="metric-value">{metric.value}</p>
              <p className="mt-3 text-[color:var(--muted)]">{metric.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section content-layer section-divider">
        <Reveal className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-4">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Частые вопросы о процессе и подходе.</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.05}
                className="surface-card-muted p-6"
              >
                <h3 className="text-2xl">{faq.question}</h3>
                <p className="mt-4 text-[color:var(--muted)]">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
