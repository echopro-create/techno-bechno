import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const serviceLinks = [
  "Сайт-визитка",
  "Корпоративный сайт",
  "Продуктовый интерфейс",
  "Мобильное приложение",
];

const socialPlaceholders = ["Behance", "Dribbble", "LinkedIn"];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]/86 pb-8 pt-20">
      <div className="page-section">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.6fr]">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full px-1 py-1 text-xl font-semibold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--foreground)] text-[color:var(--background)]">
                <span className="h-2.5 w-2.5 rounded-sm bg-[color:var(--accent)]" />
              </span>
              WebStudio
            </Link>
            <p className="max-w-md text-[color:var(--muted)]">
              Проектируем digital-опыт, в котором navigation layer, контентный
              ритм и темы работают как одна система.
            </p>
            <a
              href="mailto:hello@webstudio.ru"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--foreground)]"
            >
              hello@webstudio.ru
              <ArrowUpRight className="h-4 w-4 text-[color:var(--muted)]" />
            </a>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Услуги
            </p>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-[color:var(--foreground)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Навигация
            </p>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              <li>
                <Link href="/portfolio">Портфолио</Link>
              </li>
              <li>
                <Link href="/about">О студии</Link>
              </li>
              <li>
                <Link href="/contact">Контакты</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Соцсети
            </p>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {socialPlaceholders.map((item) => (
                <li key={item} className="flex items-center justify-between gap-3">
                  <span>{item}</span>
                  <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]/80">
                    soon
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} WebStudio. Все права защищены.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/terms">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
