import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn, HoverScale, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: "Портфолио: примеры созданных сайтов и мобильных приложений",
  description:
    "Посмотрите примеры наших работ. Современные сайты и удобные мобильные приложения, разработанные для микробизнеса и частных экспертов.",
};

const projects = [
  {
    title: "EcoStore App",
    category: "Мобильные приложения",
    desc: "iOS приложение для магазина экологичных товаров. Интеграция Apple Pay, удобная корзина и фильтрация.",
    tags: ["Swift", "iOS", "E-commerce"],
    color: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "Lawyer Personal Brand",
    category: "Веб-проекты (Сайты)",
    desc: "Премиальный сайт-визитка для частного юриста. Строгий минимализм, акцент на типографике и экспертизе.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    color: "from-blue-500/20 to-indigo-500/5",
  },
  {
    title: "Local Coffee Shop",
    category: "Веб-проекты (Сайты)",
    desc: "Лендинг для локальной кофейни с интерактивным меню и формой предзаказа.",
    tags: ["React", "Framer Motion"],
    color: "from-orange-500/20 to-amber-500/5",
  },
  {
    title: "Fitness Tracker AI",
    category: "Мобильные приложения",
    desc: "Кроссплатформенное приложение (iOS/Android) с умным алгоритмом подбора тренировок.",
    tags: ["React Native", "AI", "HealthKit"],
    color: "from-purple-500/20 to-fuchsia-500/5",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col items-center pb-24 mesh-bg min-h-screen">
      <section className="w-full px-6 pt-32 pb-16 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Примеры наших работ
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Мы гордимся каждым проектом. Исследуйте наши кейсы по созданию
            сайтов и мобильных приложений.
          </p>
        </FadeIn>
      </section>

      <section className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
              className="group rounded-[2.5rem] overflow-hidden bg-[color:var(--card)]/50 backdrop-blur-xl border border-[color:var(--border)] transition-all duration-500 hover:border-[color:var(--foreground)]/30 shadow-xl shadow-black/5"
            >
              <div
                className={`w-full h-72 md:h-96 bg-gradient-to-br ${project.color} flex items-center justify-center p-8 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <HoverScale className="w-full h-full bg-[color:var(--background)]/80 backdrop-blur-sm rounded-3xl border border-[color:var(--border)] shadow-2xl flex items-center justify-center translate-y-8 group-hover:translate-y-4 transition-transform duration-700 ease-out">
                  <span className="text-lg font-medium text-[color:var(--muted)]">
                    App Interface Preview
                  </span>
                </HoverScale>
              </div>

              <div className="p-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[color:var(--accent)] tracking-wide uppercase">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[color:var(--foreground)]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[color:var(--muted)] mb-8 line-clamp-2 text-lg leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-[color:var(--border)]/50 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl px-6 mt-32 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Хотите такой же крутой результат?
          </h2>
          <p className="text-xl text-[color:var(--muted)] mb-10 leading-relaxed max-w-2xl mx-auto">
            Давайте обсудим вашу идею и превратим ее в современный IT-продукт.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-5 bg-[color:var(--foreground)] text-[color:var(--background)] rounded-full font-medium text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Начать проект
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
