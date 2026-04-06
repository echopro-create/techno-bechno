import type { Metadata } from 'next';
import Link from 'next/link';
import {
  COMPANY_NAME,
  PUBLIC_CONTACTS,
  SERVICE_AREAS,
} from '@/lib/company-profile';

export const metadata: Metadata = {
  title: 'Контакты | Техно-Бэхно',
  description:
    'Контакты и география работы Техно-Бэхно: Краснодар, Сочи, Новороссийск, Анапа и Краснодарский край.',
};

export default function ContactsPage() {
  const hasContacts = Object.values(PUBLIC_CONTACTS).some(Boolean);

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-[#f5f5f7]">
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

        <p className="text-sm uppercase tracking-[0.22em] text-zinc-500 text-center md:text-left mt-8 font-mono">Контакты и гео-покрытие</p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
          IT-интеграция в Краснодаре и ЮФО
        </h1>
        <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-zinc-400 text-center md:text-left font-light">
          Мы проектируем архитектуру сложных систем и разрабатываем B2B-продукты премиального уровня. Готовы погрузиться в логику вашего бизнеса, провести глубокий IT-аудит (CustDev) и собрать Estimate. Вся предпроектная работа строго в рамках NDA.
        </p>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
            <h2 className="text-2xl font-semibold tracking-tight text-center md:text-left text-white">Географическое присутствие</h2>
            <p className="mt-2 text-zinc-500 text-sm text-center md:text-left mb-6">Физическое присутствие для очных встреч</p>
            <ul className="space-y-3 text-zinc-300">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="rounded-xl border border-white/5 bg-black/40 px-5 py-4 font-medium tracking-wide">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
            <h2 className="text-2xl font-semibold tracking-tight text-center md:text-left text-white">Прямая линия</h2>
            <p className="mt-2 text-zinc-500 text-sm text-center md:text-left mb-6">Связь с техническим руководством</p>
            {hasContacts ? (
              <ul className="space-y-3 text-zinc-300">
                {PUBLIC_CONTACTS.email ? <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4"><span className="text-zinc-500 mr-2">Email:</span>{PUBLIC_CONTACTS.email}</li> : null}
                {PUBLIC_CONTACTS.phone ? <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4"><span className="text-zinc-500 mr-2">Телефон:</span>{PUBLIC_CONTACTS.phone}</li> : null}
                {PUBLIC_CONTACTS.telegram ? <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4"><span className="text-zinc-500 mr-2">Telegram:</span>{PUBLIC_CONTACTS.telegram}</li> : null}
                {PUBLIC_CONTACTS.whatsapp ? <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4"><span className="text-zinc-500 mr-2">WhatsApp:</span>{PUBLIC_CONTACTS.whatsapp}</li> : null}
                {PUBLIC_CONTACTS.address ? <li className="rounded-xl border border-white/5 bg-black/40 px-5 py-4"><span className="text-zinc-500 mr-2">Адрес:</span>{PUBLIC_CONTACTS.address}</li> : null}
              </ul>
            ) : (
              <div className="h-full flex flex-col justify-center pb-8">
                <p className="leading-7 text-zinc-400 text-center md:text-left font-light">
                  В данный момент мы перестраиваем систему приема внешних лидов для корпоративного сегмента. Для безопасного обмена вводными данными оставьте заявку через формы на сайте, и Senior Project Manager выйдет с вами на связь в течение часа.
                </p>
                <div className="mt-8 text-sm uppercase tracking-widest text-zinc-500 font-mono text-center md:text-left bg-black/30 w-fit mx-auto md:mx-0 px-4 py-2 rounded-lg border border-white/5">
                  SLA Support: Пн-Пт, 10:00 — 19:00
                </div>
              </div>
            )}
          </div>
        </section>

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
  );
}
