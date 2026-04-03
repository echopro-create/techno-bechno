import type { Metadata } from "next";
import { ShieldCheck, Target, Users, Zap } from "lucide-react";
import { FadeIn, HoverLift, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: "О нашей веб-студии",
  description:
    "Познакомьтесь с командой разработчиков. Мы делаем премиальные IT-продукты доступными для малого бизнеса и фрилансеров. Наш опыт и принципы работы.",
};

const faqs = [
  {
    question: "Нужны ли технические знания для управления сайтом?",
    answer:
      "Нет. Мы настраиваем интуитивно понятную панель управления (CMS), где вы сможете менять текст и фото так же легко, как в социальных сетях.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Мы работаем по договору. Для небольших проектов (сайты-визитки) возможна работа без предоплаты или с минимальным авансом 30%. Остаток выплачивается после сдачи проекта.",
  },
  {
    question: "Включена ли в стоимость поддержка?",
    answer:
      "Да, мы предоставляем 1 месяц бесплатной технической поддержки для всех разработанных проектов. Далее вы можете выбрать удобный тариф сопровождения.",
  },
];

const principles = [
  {
    icon: <Target className="text-[color:var(--accent)] w-6 h-6" />,
    title: "Фокус",
    desc: "Концентрация на конверсии и пользе для бизнеса",
  },
  {
    icon: <Zap className="text-[color:var(--accent)] w-6 h-6" />,
    title: "Скорость",
    desc: "Быстрая загрузка 99/100 по Google PageSpeed",
  },
  {
    icon: <ShieldCheck className="text-[color:var(--accent)] w-6 h-6" />,
    title: "Надежность",
    desc: "Безопасный чистый код и современные фреймворки",
  },
  {
    icon: <Users className="text-[color:var(--accent)] w-6 h-6" />,
    title: "Поддержка",
    desc: "Всегда на связи. Мы не бросаем клиентов после сдачи",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center pb-32 mesh-bg min-h-screen">
      <section className="w-full px-6 pt-32 pb-20 max-w-5xl text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Делаем премиальные IT-решения доступными
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--muted)] leading-relaxed max-w-3xl mx-auto">
            Мы — команда разработчиков и дизайнеров, объединенных одной целью:
            помочь микробизнесу и экспертам выглядеть в интернете дорого и
            профессионально, не переплачивая агентствам.
          </p>
        </FadeIn>
      </section>

      <section className="w-full max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Наша миссия и подход
            </h2>
            <p className="text-xl text-[color:var(--muted)] mb-8 leading-relaxed">
              Мы верим, что хороший дизайн должен быть незаметным, а код —
              безупречным. Вдохновляясь эстетикой Apple, мы убираем все лишнее,
              оставляя только суть.
            </p>
            <p className="text-xl text-[color:var(--muted)] leading-relaxed">
              Наш подход исключает конвейер. Мы берем ограниченное количество
              проектов в месяц, чтобы погрузиться в каждый из них и выдать
              результат, которым будем гордиться.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {principles.map((item, index) => (
              <HoverLift
                key={item.title}
                delay={index * 0.08}
                className="p-8 rounded-3xl bg-[color:var(--card)]/50 backdrop-blur-xl border border-[color:var(--border)] hover:border-[color:var(--foreground)]/20 transition-all duration-300"
              >
                <div className="mb-6 bg-[color:var(--background)] w-12 h-12 rounded-2xl flex items-center justify-center border border-[color:var(--border)]">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-[color:var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </HoverLift>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl px-6 py-32 text-center border-t border-[color:var(--border)]/50 mt-16">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight mb-16">
            Почему нам можно доверять
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--foreground)] to-[color:var(--accent)]">
                5+
              </div>
              <p className="text-[color:var(--muted)] text-lg">
                лет опыта в коммерческой веб-разработке
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--foreground)] to-[color:var(--accent)]">
                120+
              </div>
              <p className="text-[color:var(--muted)] text-lg">
                успешно запущенных проектов по всему миру
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--foreground)] to-[color:var(--accent)]">
                100%
              </div>
              <p className="text-[color:var(--muted)] text-lg">
                соблюдение сроков, закрепленных в договоре
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="w-full max-w-4xl px-6 py-24">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
            Ответы на частые вопросы
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.06}
                className="p-10 rounded-[2rem] bg-[color:var(--card)]/50 backdrop-blur-xl border border-[color:var(--border)] hover:border-[color:var(--foreground)]/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {faq.question}
                </h3>
                <p className="text-[color:var(--muted)] leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
