import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FadeIn, HoverScale, Reveal } from "@/components/Animated";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Примеры направлений и форматов, в которых WebStudio собирает премиальный digital-опыт: сайты брендов, сервисные интерфейсы и мобильные продукты.",
};

const projects = [
  {
    title: "EcoStore App",
    category: "Мобильный продукт",
    description:
      "E-commerce интерфейс с быстрой навигацией по каталогу, мягкими переходами между разделами и сильной mobile-first иерархией.",
    tags: ["Swift", "iOS", "Commerce"],
    accent: "rgba(52, 211, 153, 0.22)",
    surface: "rgba(14, 44, 36, 0.78)",
  },
  {
    title: "Lawyer Personal Brand",
    category: "Премиальный сайт",
    description:
      "Редакционный сайт частного юриста, где доверие строится через контентный rhythm, контраст и спокойную navigation layer.",
    tags: ["Next.js", "SEO", "Editorial"],
    accent: "rgba(96, 165, 250, 0.22)",
    surface: "rgba(13, 26, 46, 0.78)",
  },
  {
    title: "Local Coffee Shop",
    category: "Брендовый лендинг",
    description:
      "Локальный food-бренд с меню, предзаказом и акцентом на атмосферу без перегруженного визуального слоя.",
    tags: ["Brand", "Menu", "Conversion"],
    accent: "rgba(249, 115, 22, 0.22)",
    surface: "rgba(53, 26, 10, 0.8)",
  },
  {
    title: "Fitness Tracker AI",
    category: "Сервисный интерфейс",
    description:
      "Приложение с тренировочными сценариями и data-heavy экранами, где важна ясная иерархия внутри плотного контента.",
    tags: ["AI", "Health", "React Native"],
    accent: "rgba(168, 85, 247, 0.24)",
    surface: "rgba(36, 17, 63, 0.8)",
  },
];

export default function PortfolioPage() {
  return (
    <div className="page-shell mesh-bg">
      <section className="page-section content-layer pt-4 md:pt-10">
        <FadeIn className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="section-kicker">Портфолио</p>
            <h1 className="max-w-[11ch] text-[clamp(3rem,6vw,5.7rem)] font-semibold">
              Кейсы, где важна не только картинка, но и то, как человек движется
              внутри продукта.
            </h1>
            <p className="section-lead">
              Ниже не галерея “декоративных экранов”, а направления, в которых мы
              собираем продуктовую подачу: контент, сценарий, темизацию и
              навигационный слой.
            </p>
          </div>

          <div className="surface-card p-6 md:p-7">
            <p className="section-kicker">Case Format</p>
            <p className="mt-4 text-xl text-[color:var(--muted)]">
              Даже на концептах показываем не абстрактный мокап, а порядок
              уровней: primary action, supporting data, secondary navigation.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="page-section content-layer">
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.04}
              className="surface-card overflow-hidden"
            >
              <div
                className="relative p-6 md:p-7"
                style={{
                  background: `linear-gradient(180deg, ${project.accent} 0%, transparent 55%)`,
                }}
              >
                <div
                  className="rounded-[1.75rem] border border-white/10 p-4 shadow-[var(--shadow-strong)]"
                  style={{ backgroundColor: project.surface }}
                >
                  <HoverScale className="rounded-[1.35rem] border border-white/8 bg-white/6 p-4 text-white backdrop-blur-sm">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/60">
                      <span>{project.category}</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                    <div className="mt-5 rounded-[1.1rem] bg-white/8 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/60">Primary CTA</p>
                          <p className="mt-1 text-lg font-semibold">
                            {project.title}
                          </p>
                        </div>
                        <div className="rounded-full bg-white/12 px-3 py-2 text-xs font-semibold">
                          Active
                        </div>
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1rem] bg-white/7 p-3">
                          <p className="text-sm text-white/60">Navigation</p>
                          <p className="mt-2 font-medium">
                            Чистая иерархия действий
                          </p>
                        </div>
                        <div className="rounded-[1rem] bg-white/7 p-3">
                          <p className="text-sm text-white/60">Theme</p>
                          <p className="mt-2 font-medium">
                            Светлая и тёмная подача
                          </p>
                        </div>
                      </div>
                    </div>
                  </HoverScale>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--background-muted)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-strong)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 text-3xl">{project.title}</h2>
                <p className="mt-4 text-[color:var(--muted)]">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section content-layer section-divider">
        <Reveal className="rounded-[2rem] bg-[color:var(--foreground)] px-6 py-8 text-[color:var(--background)] shadow-[var(--shadow-strong)] md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="section-kicker text-white/70">Новый кейс</p>
              <h2 className="max-w-[13ch] text-[clamp(2rem,4vw,4rem)]">
                Хотите такой же собранный результат для своего продукта?
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/78">
                Разберём задачу, определим нужный уровень глубины и предложим
                формат, в котором визуал и навигация будут работать как одна
                система.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-[color:var(--foreground)]"
            >
              Начать проект
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
