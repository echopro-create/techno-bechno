import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { FadeIn, Reveal } from "@/components/Animated";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Контакты веб-студии",
  description:
    "Свяжитесь с нами для бесплатной консультации и оценки вашего проекта. Напишите в мессенджеры или оставьте заявку на сайте.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center pb-32 mesh-bg min-h-screen">
      <section className="w-full px-6 pt-32 pb-20 text-center relative z-10">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Свяжитесь с нами
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Готовы начать проект или нужна консультация? Напишите нам, и мы
            ответим в течение 15 минут.
          </p>
        </FadeIn>
      </section>

      <section className="w-full max-w-6xl px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal>
            <h2 className="text-3xl font-bold mb-10 tracking-tight">
              Контактная информация
            </h2>

            <div className="space-y-6">
              <a
                href="mailto:hello@webstudio.ru"
                className="flex items-center gap-6 p-8 rounded-[2rem] glass-panel transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-[color:var(--accent)]/10 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-[color:var(--background)] flex items-center justify-center group-hover:bg-[color:var(--accent)] group-hover:text-white transition-colors duration-500 border border-[color:var(--border)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-base text-[color:var(--muted)] mb-1">
                    Email для проектов
                  </p>
                  <p className="font-bold text-xl tracking-tight">
                    hello@webstudio.ru
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-8 rounded-[2rem] glass-panel shadow-sm opacity-90">
                <div className="w-16 h-16 rounded-2xl bg-[color:var(--background)] flex items-center justify-center border border-[color:var(--border)]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-base text-[color:var(--muted)] mb-1">
                    Telegram
                  </p>
                  <p className="font-bold text-xl tracking-tight">
                    @webstudio_dev
                  </p>
                  <p className="text-sm text-[color:var(--muted)] mt-1">
                    Ссылка будет добавлена позже. Пока это placeholder-контакт.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-8 rounded-[2rem] glass-panel shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[color:var(--background)] flex items-center justify-center border border-[color:var(--border)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-base text-[color:var(--muted)] mb-1">
                    Офис (по предварительной записи)
                  </p>
                  <p className="font-bold text-xl tracking-tight">
                    Москва, Пресненская наб. 12
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold mb-10 tracking-tight">
              Оставить заявку на оценку
            </h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
