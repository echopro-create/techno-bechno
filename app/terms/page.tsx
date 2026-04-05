import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_NAME } from '@/lib/company-profile';

export const metadata: Metadata = {
  title: 'Условия использования | Техно-Бэхно',
  description: 'Условия использования сайта Техно-Бэхно.',
};

export default function TermsPage() {
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
          Условия использования
        </h1>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Назначение сайта</h2>
            <p className="mt-3 leading-8">
              Сайт {COMPANY_NAME} используется для презентации услуг, направлений работы, подхода к разработке и
              первичной коммуникации по потенциальным проектам.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">2. Ограничение ответственности</h2>
            <p className="mt-3 leading-8">
              Материалы сайта носят информационный характер и не являются публичной офертой, если иное не указано
              отдельно. Финальный состав работ, сроки и стоимость определяются после обсуждения проекта.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">3. Использование материалов</h2>
            <p className="mt-3 leading-8">
              Тексты, структура, графика и иные элементы сайта не должны копироваться и использоваться без
              согласования с правообладателем.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">4. Изменение информации</h2>
            <p className="mt-3 leading-8">
              Информация на сайте может обновляться: структура услуг, подход, контактные данные, legal-страницы и
              описания направлений работы.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
