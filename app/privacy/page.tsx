import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_NAME } from '@/lib/company-profile';

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
        <div className="mt-10 space-y-8 text-zinc-300 font-light text-base md:text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">1. Общие положения и статус оператора</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Настоящая Политика регламентирует порядок обработки персональных данных и меры по обеспечению безопасности данных, применяемые корпоративным подразделением {COMPANY_NAME}. Мы неукоснительно соблюдаем требования Общего регламента по защите данных (GDPR) и профильного законодательства (ФЗ-152), гарантируя полную конфиденциальность коммерческой информации (NDA) и персональных данных наших корпоративных клиентов.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">2. Категории обрабатываемых данных (B2B сегмент)</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              В рамках предпроектной аналитики и тендерных процедур мы можем обрабатывать:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-400">
              <li>Корпоративные контактные данные лиц, принимающих решения (ЛПР) и технических специалистов;</li>
              <li>Спецификации проектов, технические задания и архитектурные схемы, переданные через формы обратной связи;</li>
              <li>Техническую телеметрию (IP-адреса, User-Agent) для обеспечения безопасности нашей IT-инфраструктуры от DDoS и Brute-force атак.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">3. Детерминированные цели обработки</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Сбор данных производится исключительно в прагматичных целях:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-400">
              <li>Проведение первичного IT-аудита и формирование персонализированного коммерческого предложения (Estimate);</li>
              <li>Организация защищенных сеансов видеосвязи для обсуждения архитектуры проекта;</li>
              <li>Подписание соглашений о неразглашении (NDA) и договоров на разработку цифровых продуктов.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">4. Инфраструктурная безопасность и шифрование</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Вся собираемая информация хешируется и хранится в изолированных базах данных с использованием стандарта шифрования AES-256. Внутренний доступ сотрудников {COMPANY_NAME} к проектным данным регулируется строгой ролевой моделью (RBAC) и системой Audit Trail (логирование доступов). Мы исключаем передачу данных сторонним маркетинговым или рекламным агентствам.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight">5. Права субъектов данных и Data Portability</h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Как субъект данных, вы или ваша организация имеете полное право в любой момент запросить полный дамп обрабатываемых метрик, потребовать их немедленного уничтожения с наших серверов или отозвать согласие. Для реализации этих прав направьте официальный запрос выделенному проектному менеджеру или через форму связи на странице Контактов.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
