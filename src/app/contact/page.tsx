import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { FadeIn, Reveal } from "@/components/Animated";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с WebStudio: обсудим структуру проекта, навигацию, light/dark-систему и оптимальный формат запуска.",
};

const contactItems = [
  {
    title: "Email для проектов",
    value: "hello@webstudio.ru",
    note: "Подходит для брифа, материалов и первого описания задачи.",
    href: "mailto:hello@webstudio.ru",
    icon: Mail,
  },
  {
    title: "Telegram",
    value: "@webstudio_dev",
    note: "Ссылка будет добавлена позже. Пока используйте email для первого касания.",
    icon: MessageCircle,
  },
  {
    title: "Офис по записи",
    value: "Москва, Пресненская наб. 12",
    note: "Онлайн-созвон обычно быстрее и даёт тот же результат по уточнению задачи.",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <div className="page-shell mesh-bg">
      <section className="page-section content-layer pt-4 md:pt-10">
        <FadeIn className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="section-kicker">Контакты</p>
            <h1 className="max-w-[10ch] text-[clamp(3rem,6vw,5.7rem)] font-semibold">
              Соберём проект так, чтобы он ощущался как продукт.
            </h1>
            <p className="section-lead">
              Опишите задачу, желаемый объём и ориентир по срокам. Мы ответим с
              понятным next step: что стоит делать сейчас, а что можно отложить.
            </p>
          </div>

          <div className="surface-card p-6 md:p-7">
            <p className="section-kicker">Что подготовить</p>
            <ul className="mt-5 space-y-3 text-[color:var(--muted)]">
              <li>1. Кратко опишите продукт или бизнес.</li>
              <li>2. Уточните, нужен сайт, интерфейс или мобильное приложение.</li>
              <li>3. Если есть дедлайн, напишите его сразу.</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      <section className="page-section content-layer">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const cardContent = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--background-muted)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5">
                    <p className="text-sm text-[color:var(--muted)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                    <p className="mt-3 text-[color:var(--muted)]">{item.note}</p>
                  </div>
                </>
              );

              return item.href ? (
                <Reveal
                  key={item.title}
                  delay={index * 0.04}
                  className="surface-card p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <a href={item.href} className="block">
                    {cardContent}
                  </a>
                </Reveal>
              ) : (
                <Reveal
                  key={item.title}
                  delay={index * 0.04}
                  className="surface-card p-6"
                >
                  {cardContent}
                </Reveal>
              );
            })}
          </div>

          <Reveal className="surface-card p-6 md:p-7">
            <div className="space-y-3">
              <p className="section-kicker">Бриф</p>
              <h2 className="text-3xl">Оставить заявку на оценку</h2>
              <p className="text-[color:var(--muted)]">
                Нужны только базовые вводные. Если чего-то не хватает, соберём
                остальное вместе уже на следующем шаге.
              </p>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
