"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/about", label: "О студии" },
];

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <div className="relative w-full max-w-2xl">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-auto flex items-center justify-between p-2 rounded-full glass-panel shadow-2xl shadow-black/5 dark:shadow-white/5 border border-[color:var(--border)]/80 w-full"
                >
                    <Link href="/" className="font-bold text-lg tracking-tight pl-6 pr-4 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[color:var(--foreground)] to-[color:var(--muted)] flex items-center justify-center">
                            <div className="w-2 h-2 bg-[color:var(--background)] rounded-sm" />
                        </div>
                        <span className="hidden sm:inline-block">WebStudio</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1 px-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "text-[color:var(--foreground)]" : "text-[color:var(--muted)] hover:text-[color:var(--foreground)] hover:bg-[color:var(--foreground)]/5"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-[color:var(--foreground)]/5 dark:bg-[color:var(--foreground)]/10 rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2 pr-2">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="md:hidden p-2.5 rounded-full hover:bg-[color:var(--foreground)]/5 transition-colors"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                            onClick={() => setIsMenuOpen((open) => !open)}
                        >
                            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex px-5 py-2.5 bg-[color:var(--foreground)] text-[color:var(--background)] rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                        >
                            Связаться
                        </Link>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {isMenuOpen ? (
                        <motion.nav
                            id="mobile-navigation"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="pointer-events-auto md:hidden mt-3 glass-panel rounded-[2rem] p-4 shadow-2xl shadow-black/5 dark:shadow-white/5 border border-[color:var(--border)]/80"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${isActive
                                                ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                                                : "text-[color:var(--foreground)] hover:bg-[color:var(--foreground)]/5"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="mt-2 rounded-2xl px-4 py-3 text-sm font-semibold bg-[color:var(--foreground)] text-[color:var(--background)]"
                                >
                                    Связаться
                                </Link>
                            </div>
                        </motion.nav>
                    ) : null}
                </AnimatePresence>
            </div>
        </header>
    );
}
