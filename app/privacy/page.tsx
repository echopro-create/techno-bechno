import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_NAME, CONTACT_DISCLOSURE } from '@/lib/company-profile';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Техно-Бэхно',
  description: 'Политика конфиденциальности сайта Техно-Бэхно.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-[#f5f5f7]">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
        >
          На главную
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Политика конфиденциальности
        </h1>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Общие положения</h2>
            <p className="mt-3 leading-8">
              Эта политика описывает общий подход {COMPANY_NAME} к обработке информации, которую пользователь
              может передавать через сайт, формы связи, почту и иные каналы взаимодействия.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">2. Какие данные могут обрабатываться</h2>
            <p className="mt-3 leading-8">
              Имя, email, телефон, текст обращения, сведения о компании, технические данные о посещении сайта и
              иная информация, необходимая для ответа на запрос или подготовки предложения по проекту.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">3. Для чего используются данные</h2>
            <p className="mt-3 leading-8">
              Для обратной связи, оценки проекта, подготовки коммерческого предложения, улучшения структуры сайта,
              аналитики взаимодействия и обеспечения стабильной работы сервиса.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">4. Передача третьим лицам</h2>
            <p className="mt-3 leading-8">
              Данные не передаются третьим лицам без законного основания или необходимости, связанной с
              обслуживанием сайта, аналитикой и выполнением запроса пользователя.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">5. Актуализация реквизитов</h2>
            <p className="mt-3 leading-8">
              Публичные контакты и реквизиты компании обновляются после внутреннего подтверждения. {CONTACT_DISCLOSURE}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
