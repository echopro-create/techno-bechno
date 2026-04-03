import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socialPlaceholders = ["Behance", "Dribbble", "Twitter", "LinkedIn"];

export function Footer() {
    return (
        <footer className="border-t border-[color:var(--border)] pt-20 pb-10 bg-[color:var(--card)]/30 backdrop-blur-3xl">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
                <div className="col-span-1 md:col-span-12 lg:col-span-5">
                    <Link href="/" className="font-bold text-2xl tracking-tight mb-6 inline-flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[color:var(--foreground)] to-[color:var(--muted)] flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-[color:var(--background)] rounded-sm" />
                        </div>
                        WebStudio
                    </Link>
                    <p className="text-base text-[color:var(--muted)] max-w-sm leading-relaxed mb-8">
                        Проектируем и разрабатываем цифровые продукты мирового уровня для тех, кто ценит эстетику и скорость.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="mailto:hello@webstudio.ru" className="text-sm font-medium hover:text-[color:var(--accent)] transition-colors flex items-center gap-1">
                            hello@webstudio.ru <ArrowUpRight className="w-3 h-3 opacity-50" />
                        </a>
                        <span className="text-[color:var(--border)]">|</span>
                        <span
                            aria-disabled="true"
                            className="text-sm font-medium text-[color:var(--muted)] flex items-center gap-2 opacity-80"
                        >
                            Telegram
                            <span className="text-xs uppercase tracking-[0.2em]">Скоро</span>
                        </span>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-4 lg:col-span-2 lg:col-start-7">
                    <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-[color:var(--foreground)]">Услуги</h3>
                    <ul className="space-y-4 text-sm font-medium text-[color:var(--muted)]">
                        <li><Link href="/services" className="hover:text-[color:var(--foreground)] transition-colors">Сайт-визитка</Link></li>
                        <li><Link href="/services" className="hover:text-[color:var(--foreground)] transition-colors">Корпоративный сайт</Link></li>
                        <li><Link href="/services" className="hover:text-[color:var(--foreground)] transition-colors">Интернет-магазин</Link></li>
                        <li><Link href="/services" className="hover:text-[color:var(--foreground)] transition-colors">Мобильные приложения</Link></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-4 lg:col-span-2">
                    <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-[color:var(--foreground)]">Компания</h3>
                    <ul className="space-y-4 text-sm font-medium text-[color:var(--muted)]">
                        <li><Link href="/portfolio" className="hover:text-[color:var(--foreground)] transition-colors">Кейсы</Link></li>
                        <li><Link href="/about" className="hover:text-[color:var(--foreground)] transition-colors">О студии</Link></li>
                        <li><Link href="/about" className="hover:text-[color:var(--foreground)] transition-colors">Подход к работе</Link></li>
                        <li><Link href="/contact" className="hover:text-[color:var(--foreground)] transition-colors">Контакты</Link></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-4 lg:col-span-2">
                    <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-[color:var(--foreground)]">Соцсети</h3>
                    <ul className="space-y-4 text-sm font-medium text-[color:var(--muted)]">
                        {socialPlaceholders.map((item) => (
                            <li key={item}>
                                <span
                                    aria-disabled="true"
                                    className="flex items-center gap-1 justify-between opacity-70"
                                >
                                    {item}
                                    <span className="text-[10px] uppercase tracking-[0.2em]">
                                        Скоро
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[color:var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs font-medium text-[color:var(--muted)]">© {new Date().getFullYear()} WebStudio Inc. Все права защищены.</p>
                <div className="flex gap-6 text-xs font-medium text-[color:var(--muted)]">
                    <Link href="/privacy" className="hover:text-[color:var(--foreground)] transition-colors">Политика конфиденциальности</Link>
                    <Link href="/terms" className="hover:text-[color:var(--foreground)] transition-colors">Условия использования</Link>
                </div>
            </div>
        </footer>
    );
}
