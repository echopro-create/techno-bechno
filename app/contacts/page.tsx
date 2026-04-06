import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Mail, MessageCircle, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  COMPANY_NAME,
  PUBLIC_CONTACTS,
  MEETING_LOCATION,
  SERVICE_AREAS,
} from '@/lib/company-profile';

export const metadata: Metadata = {
  title: 'Контакты | Техно-Бэхно — Свяжитесь с нами',
  description:
    'Контакты Техно-Бэхно: WhatsApp, Telegram, Email. Работаем удалённо по всему миру. Очные встречи в Париже.',
  alternates: {
    canonical: 'https://tehnobehno.site/contacts',
  },
  openGraph: {
    title: 'Контакты | Техно-Бэхно',
    description: 'Свяжитесь с нами через WhatsApp, Telegram или Email. Очные встречи в Париже.',
    url: 'https://tehnobehno.site/contacts',
    siteName: 'Техно-Бэхно',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Контакты Техно-Бэхно' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контакты | Техно-Бэхно',
    description: 'Свяжитесь с нами через WhatsApp, Telegram или Email.',
    images: ['/og-image.png'],
  },
};

const whatsappLink = `https://wa.me/${PUBLIC_CONTACTS.whatsapp.replace(/[^0-9]/g, '')}`;
const telegramLink = `https://t.me/${PUBLIC_CONTACTS.telegram.replace('@', '')}`;

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white/20">
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Техно-Бэхно",
          "url": "https://tehnobehno.site",
          "description": "Разработка премиальных веб-сайтов и мобильных приложений для B2B сегмента",
          "email": PUBLIC_CONTACTS.email,
          "areaServed": [
            ...SERVICE_AREAS.map(area => ({"@type": "City", "name": area})),
            {"@type": "City", "name": MEETING_LOCATION.city}
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": MEETING_LOCATION.city,
            "addressCountry": "FR"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": PUBLIC_CONTACTS.email,
              "availableLanguage": ["Russian", "English", "French"]
            }
          ],
          "priceRange": "$$$$"
        })
      }} />
      <BackgroundEffects />
      <Navbar />

      <main className="px-6 pt-28 pb-24 relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
            >
              На главную
            </Link>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
              {COMPANY_NAME}
            </span>
          </div>

          <p className="text-sm uppercase tracking-[0.22em] text-zinc-500 text-center md:text-left mt-8 font-mono">Контакты</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
            Давайте обсудим проект
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-zinc-400 text-center md:text-left font-light">
            Выберите удобный канал связи. Ответим в течение часа в рабочее время. Вся предпроектная коммуникация строго в рамках NDA.
          </p>

          {/* ---------- Contact Cards ---------- */}
          <section className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Telegram */}
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-telegram"
              className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 text-zinc-400 transition-colors group-hover:bg-white/10 group-hover:text-white">
                  <MessageCircle className="size-7" />
                </div>
                <ArrowUpRight className="size-5 text-zinc-600 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-white">Telegram</h2>
              <p className="mt-1 text-sm text-zinc-500">Быстрые вопросы и обсуждения</p>
              <p className="mt-auto pt-4 text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">
                {PUBLIC_CONTACTS.telegram}
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp"
              className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 text-zinc-400 transition-colors group-hover:bg-white/10 group-hover:text-white">
                  <Phone className="size-7" />
                </div>
                <ArrowUpRight className="size-5 text-zinc-600 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-white">WhatsApp</h2>
              <p className="mt-1 text-sm text-zinc-500">Звонки и переписка</p>
              <p className="mt-auto pt-4 text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">
                {PUBLIC_CONTACTS.whatsapp}
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${PUBLIC_CONTACTS.email}`}
              id="contact-email"
              className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02] sm:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 text-zinc-400 transition-colors group-hover:bg-white/10 group-hover:text-white">
                  <Mail className="size-7" />
                </div>
                <ArrowUpRight className="size-5 text-zinc-600 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-white">Email</h2>
              <p className="mt-1 text-sm text-zinc-500">Документы и формальные запросы</p>
              <p className="mt-auto pt-4 text-lg font-medium text-zinc-300 group-hover:text-white transition-colors break-all">
                {PUBLIC_CONTACTS.email}
              </p>
            </a>
          </section>

          {/* ---------- Meeting & Remote ---------- */}
          <section className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Очные встречи */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/5 text-zinc-400">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-white">Очные встречи</h2>
                  <p className="text-sm text-zinc-500">Личные презентации и брифинги</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 px-5 py-5">
                <p className="text-2xl font-semibold text-white">{MEETING_LOCATION.city}, {MEETING_LOCATION.country}</p>
                <p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">{MEETING_LOCATION.note}</p>
              </div>
              <div className="mt-5 text-sm uppercase tracking-widest text-zinc-500 font-mono bg-black/30 w-fit px-4 py-2 rounded-lg border border-white/5">
                SLA Support: Пн–Пт, 10:00 — 19:00 CET
              </div>
            </div>

            {/* Удалённая работа */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/5 text-zinc-400">
                  <Globe className="size-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-white">Удалённая работа</h2>
                  <p className="text-sm text-zinc-500">Полный рабочий цикл дистанционно</p>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-300">
                <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4 font-medium">
                  Работаем с клиентами по всему миру
                </li>
                <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4 font-medium">
                  NDA и безопасность на каждом этапе
                </li>
                <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4 font-medium">
                  Видеозвонки, демо, аудит — удалённо
                </li>
              </ul>
            </div>
          </section>

          {/* ---------- Info Pool ---------- */}
          <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
            <h2 className="text-2xl font-semibold tracking-tight text-center md:text-left text-white">Информационный пул для старта</h2>
            <p className="mt-2 text-zinc-500 text-sm text-center md:text-left mb-6">Метрики, которые ускорят оценку проекта (Estimate)</p>
            <ul className="grid gap-4 md:grid-cols-3 text-zinc-300">
              <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-6">
                <span className="block font-semibold text-white mb-2">1. Архитектура и стек</span>
                <span className="text-sm text-zinc-400 font-light">Что строим: Corporate Hub, SaaS платформу, Next.js каталог или кастомную CRM.</span>
              </li>
              <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-6">
                <span className="block font-semibold text-white mb-2">2. Интеграции</span>
                <span className="text-sm text-zinc-400 font-light">Какие API предстоит связывать: 1С, эквайринг, логистические шлюзы, легаси базы.</span>
              </li>
              <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-6">
                <span className="block font-semibold text-white mb-2">3. Бизнес-цели и сроки</span>
                <span className="text-sm text-zinc-400 font-light">В какие сроки рынок требует запуска MVP продукта и бюджетные ограничения.</span>
              </li>
            </ul>
            <div className="mt-10 flex justify-center md:justify-start">
              <Link
                href="/sozdanie-saitov-krasnodar"
                className="rounded-full bg-white text-black px-6 py-3 font-semibold transition-transform hover:scale-[1.02] hover:bg-zinc-200"
              >
                Изучить технологическую базу
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
