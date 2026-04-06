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
        <div className="mt-10 space-y-8 text-zinc-300 font-light text-base md:text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">1. Предмет соглашения и назначение ресурса</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Цифровая платформа {COMPANY_NAME} предоставляется на принципах «as is» и предназначена исключительно для презентации технологической экспертизы, публикации корпоративных кейсов (Case Studies) и инициации B2B сделок. Использование данного ресурса означает безоговорочное акцептование настоящих Условий без изъятий и ограничений.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">2. Правовой статус публикуемых материалов</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Никакая информация, спецификации, фреймворки оценки сроков или архитектурные концепции, изложенные на сайте, не являются публичной офертой в смысле положений Гражданского кодекса РФ, равно как и юрисдикций иных государств. Фиксация стоимости (T&M / Fixed Price), метрик SLA (Service Level Agreement) и календарного плана разработки (Roadmap) закрепляется исключительно в двусторонних контрактах.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">3. Защита интеллектуальной собственности (IP)</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Архитектура сайта, исходный код фрагментов, тексты, UX/UI дизайн-системы и логотипы являются интеллектуальной собственностью {COMPANY_NAME}. Любой парсинг данных, обратный инжиниринг (Reverse Engineering), копирование визуального стиля или интеграция наших материалов в сторонние коммерческие проекты строго запрещены и преследуются по закону.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">4. Формирование договорных отношений</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Отправка запроса через формы обратной связи не накладывает на {COMPANY_NAME} юридических обязательств по началу разработки. Коммерческие отношения вступают в силу исключительно после подписания:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-400">
              <li>Соглашения о неразглашении (Non-Disclosure Agreement - NDA);</li>
              <li>Договора на отчуждение исключительных прав или лицензионного соглашения;</li>
              <li>Рамочного договора на разработку программного обеспечения (Master Service Agreement).</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">5. Изменение Условий и метрик</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Администрация {COMPANY_NAME} сохраняет за собой суверенное право вносить изменения (коммиты) в настоящие Условия, структуру базы данных портала и методы сбора аналитики без предварительного уведомления третьих лиц.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
