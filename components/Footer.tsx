import type { ComponentType, SVGProps } from 'react';
import Link from 'next/link';
import { Code2, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import {
  CONTACT_CTA,
  CONTACT_DISCLOSURE,
  PUBLIC_CONTACTS,
  PUBLIC_SOCIAL_LINKS,
  SERVICE_AREAS,
} from '@/lib/company-profile';
import { SEO_LANDING_LINKS } from '@/lib/seo-nav';
import { seoPages } from '@/lib/seo-pages';
import { CopyrightYear } from './CopyrightYear';

const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Twitter: Twitter,
  Instagram: Instagram,
  Linkedin: Linkedin,
  Github: Github,
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <Code2 className="size-8" />
              <span className="font-semibold tracking-tight text-2xl font-display whitespace-nowrap">Техно-Бэхно</span>
            </div>
            <p className="text-zinc-400 max-w-sm text-lg">
              Создаем цифровые продукты премиум-класса, которые помогают бизнесу расти и выделяться.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Навигация</h4>
            <ul className="space-y-4 text-zinc-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Направления</h4>
            <ul className="space-y-4 text-zinc-400">
              {SEO_LANDING_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4 text-zinc-400">
              {PUBLIC_CONTACTS.email ? (
                <li>
                  <a href={`mailto:${PUBLIC_CONTACTS.email}`} className="hover:text-white transition-colors">
                    {PUBLIC_CONTACTS.email}
                  </a>
                </li>
              ) : (
                <li>{CONTACT_DISCLOSURE}</li>
              )}
              <li>География: {SERVICE_AREAS.join(', ')}</li>
              {PUBLIC_SOCIAL_LINKS.length > 0 ? (
                <li className="pt-4 flex gap-4">
                  {PUBLIC_SOCIAL_LINKS.map((social) => {
                  const Icon = ICON_MAP[social.icon];
                  return (
                    <a 
                      key={social.label}
                      href={social.href} 
                      aria-label={social.label} 
                      className="hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icon && <Icon className="size-5" />}
                    </a>
                  );
                  })}
                </li>
              ) : null}
              <li>
                <a href={CONTACT_CTA.href} className="hover:text-white transition-colors">
                  {CONTACT_CTA.primaryLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Спам-Матрица (Все кластеры) */}
        <div className="pt-10 mb-10 border-t border-white/10">
          <h4 className="text-zinc-500 font-medium mb-6 text-sm uppercase tracking-wider">Все услуги и гео-направления</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
            {seoPages.map(page => (
              <Link 
                key={page.slug} 
                href={`/${page.slug}`} 
                className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors truncate"
                title={page.heading || page.title.split('|')[0]}
              >
                {page.heading || page.title.split('|')[0]}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© <CopyrightYear /> Техно-Бэхно. Все права защищены. Сделано с любовью к минимализму.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Условия использования</Link>
            <Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
