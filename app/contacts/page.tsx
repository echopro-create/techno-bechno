import type { Metadata } from 'next';
import Link from 'next/link';
import {
  COMPANY_NAME,
  CONTACT_DISCLOSURE,
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

        <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Контакты и география</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Работаем по Краснодару и Краснодарскому краю
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Эта страница нужна как публичная точка контакта, географии и юридической прозрачности. Реальные
          каналы связи будут подключены после финального подтверждения реквизитов.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold tracking-tight">География работы</h2>
            <ul className="mt-6 space-y-3 text-zinc-300">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="rounded-2xl border border-white/10 px-4 py-3">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold tracking-tight">Публичные каналы связи</h2>
            {hasContacts ? (
              <ul className="mt-6 space-y-3 text-zinc-300">
                {PUBLIC_CONTACTS.email ? <li>Email: {PUBLIC_CONTACTS.email}</li> : null}
                {PUBLIC_CONTACTS.phone ? <li>Телефон: {PUBLIC_CONTACTS.phone}</li> : null}
                {PUBLIC_CONTACTS.telegram ? <li>Telegram: {PUBLIC_CONTACTS.telegram}</li> : null}
                {PUBLIC_CONTACTS.whatsapp ? <li>WhatsApp: {PUBLIC_CONTACTS.whatsapp}</li> : null}
                {PUBLIC_CONTACTS.address ? <li>Адрес: {PUBLIC_CONTACTS.address}</li> : null}
              </ul>
            ) : (
              <p className="mt-6 leading-7 text-zinc-300">{CONTACT_DISCLOSURE}</p>
            )}
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold tracking-tight">Что можно подготовить до созвона</h2>
          <ul className="mt-6 space-y-3 text-zinc-300">
            <li className="rounded-2xl border border-white/10 px-4 py-3">Цель проекта и тип продукта: сайт, iOS, Android, интернет-магазин или MVP.</li>
            <li className="rounded-2xl border border-white/10 px-4 py-3">Желаемый срок запуска и ограничения по бюджету.</li>
            <li className="rounded-2xl border border-white/10 px-4 py-3">Конкуренты, референсы и текущее состояние продукта или сайта.</li>
          </ul>
          <div className="mt-8">
            <Link
              href="/sozdanie-saitov-krasnodar"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Смотреть страницы услуг
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
