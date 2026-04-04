"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel flex min-h-[4.25rem] items-center gap-3 rounded-[1.75rem] px-3 py-3 md:min-h-[4.5rem] md:px-4"
        >
          <Link
            href="/"
            className="flex min-h-11 shrink-0 items-center gap-3 rounded-full px-3 text-[0.95rem] font-semibold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[color:var(--foreground)] text-[color:var(--background)] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-sm bg-[color:var(--accent)]" />
            </span>
            <span>WebStudio</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-1 rounded-full bg-[color:var(--background-muted)]/70 p-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[color:var(--foreground)]"
                          : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="header-active-link"
                          className="absolute inset-0 rounded-full bg-[color:var(--background-strong)] shadow-sm"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 34,
                          }}
                        />
                      ) : null}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="action-primary hidden min-h-11 px-5 text-sm md:inline-flex"
            >
              Обсудить проект
            </Link>
            <button
              type="button"
              className="surface-panel flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--background-strong)] md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel mt-3 overflow-hidden rounded-[1.75rem] p-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-11 items-center rounded-[1.1rem] px-4 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                          : "bg-[color:var(--background-strong)] text-[color:var(--foreground)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="mt-2 grid grid-cols-1 gap-2">
                  <Link href="/contact" className="action-primary min-h-11 text-sm">
                    Обсудить проект
                  </Link>
                </div>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
