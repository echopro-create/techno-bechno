import Image from "next/image";
import { StructuredData } from "@/components/structured-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

const serviceCards = [
  {
    eyebrow: "Сайты",
    title: "Лендинги и промо-страницы",
    description:
      "Для рекламы, локальной услуги, запуска оффера или аккуратного личного бренда.",
    points: [
      "Сильный первый экран и понятный маршрут до заявки.",
      "Контентная структура под коммерческий спрос в регионе.",
      "Чистая мобильная версия без компромиссов по визуалу.",
    ],
    accent: "Старт от 5 000 ₽",
  },
  {
    eyebrow: "Web",
    title: "Сайты-визитки и многостраничные структуры",
    description:
      "Если нужно не просто красиво, а удобно разложить услугу, разделы, FAQ и точки входа.",
    points: [
      "Навигация, иерархия и SEO-логика под Краснодарский край.",
      "Строгая визуальная система в светлой и темной темах.",
      "Готовность к дальнейшему росту, доработкам и контенту.",
    ],
    accent: "Считается по объему",
  },
  {
    eyebrow: "Mobile",
    title: "iOS / Android / MVP",
    description:
      "Для сервисов записи, каталогов, личных кабинетов и ранних продуктовых гипотез.",
    points: [
      "Разбор сценариев, экранов и объема перед стартом.",
      "Нативный или кроссплатформенный маршрут под вашу задачу.",
      "Оценка отдельно, без искусственного занижения цены.",
    ],
    accent: "После короткого аудита",
  },
  {
    eyebrow: "Support",
    title: "Редизайн и точечные доработки",
    description:
      "Если проект уже есть, но ему не хватает структуры, ритма, скорости или аккуратного интерфейса.",
    points: [
      "Локальные улучшения без полного переписывания всего сайта.",
      "Нормализация визуальной системы и ключевых экранов.",
      "Подготовка к рекламе, запуску или следующей итерации.",
    ],
    accent: "От точечной задачи",
  },
] as const;

const processSteps = [
  {
    title: "Бриф и приоритеты",
    text: "Сначала фиксируем задачу, регион, аудиторию, сценарий заявки и реальный объем.",
  },
  {
    title: "Структура и семантика",
    text: "Собираю каркас страницы, смысл блоков и SEO-опору, чтобы дизайн не жил отдельно от спроса.",
  },
  {
    title: "Визуальная система",
    text: "Собираю интерфейс, типографику, состояния, темную и светлую темы, а также авторские графические материалы.",
  },
  {
    title: "Сборка и запуск",
    text: "Проверяю адаптивность, доступность, метаданные, а затем передаю сайт или выкатываю релиз.",
  },
] as const;

const pricingCards = [
  {
    eyebrow: "Быстрый старт",
    price: "от 5 000 ₽",
    description:
      "Подходит для простой посадочной страницы, одного экрана, базового промо или точечной доработки.",
    notes: [
      "Когда задача ясна и не требует глубокой архитектуры.",
      "Хороший вход, если нужно быстро запуститься и не уходить в шаблонный конвейер.",
    ],
  },
  {
    eyebrow: "Сайт под задачу",
    price: "по смете",
    description:
      "Когда нужны структура на несколько блоков или страниц, контент, анимации, формы и локальная SEO-логика.",
    notes: [
      "Цена зависит от объема, сценариев, контента и интеграций.",
      "Оценка строится от задачи, а не от агентской надбавки.",
    ],
  },
  {
    eyebrow: "Приложение / MVP",
    price: "после брифа",
    description:
      "Для мобильных сценариев, где уже важны экраны, роли, данные, интеграции и логика продукта.",
    notes: [
      "Сначала короткий аудит сценариев и границ первой версии.",
      "Фиксированную цену без объема здесь обещать нечестно.",
    ],
  },
] as const;

const faqItems = [
  {
    question: "Можно сначала сделать сайт, а приложение позже?",
    answer:
      "Да. Для частных клиентов это часто самый разумный путь: сначала быстро проверить спрос через лендинг или сайт, затем решать, нужен ли мобильный продукт и какого объема.",
  },
  {
    question: "Работаете только по Краснодарскому краю?",
    answer:
      "Региональная подача и SEO в этой версии настроены под Краснодарский край, но сам формат работы остается удаленным. При необходимости логику можно адаптировать и под другой регион.",
  },
  {
    question: "Что, если у меня пока нет текстов и структуры?",
    answer:
      "Это нормальный старт. Я не жду от клиента готового ТЗ на двадцать страниц: сначала собираем задачу, затем формируем структуру, заголовки и минимально жизнеспособный контент.",
  },
  {
    question: "Почему здесь нет кейсов и отзывов?",
    answer:
      "Потому что я не подменяю доверие легендами. В этой версии лендинга упор сделан на качество интерфейса, прозрачный процесс и честную рамку по работе.",
  },
] as const;

const firstMessageChecklist = [
  "Кто вы и чем занимаетесь.",
  "Что нужно: лендинг, сайт, редизайн или приложение.",
  "Есть ли сроки, референсы и желаемый формат заявки.",
  "Откуда планируете получать основной трафик.",
] as const;

const trustSignals = [
  "Сайты от 5 000 ₽",
  "Тёмная и светлая темы",
  "Прямая связь с разработчиком",
] as const;

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <StructuredData />
      <div className={styles.page}>
        <div className={styles.frame}>
          <header className={styles.header}>
            <a className={styles.brand} href="#top" aria-label="На главный экран">
              <span className={styles.brandMark}>M</span>
              <span className={styles.brandCopy}>
                <strong>Mr.Hide</strong>
                <span>Private Web & Mobile</span>
              </span>
            </a>

            <nav className={styles.nav} aria-label="Навигация по лендингу">
              <a href="#services">Услуги</a>
              <a href="#process">Процесс</a>
              <a href="#pricing">Стоимость</a>
              <a href="#contact">Контакты</a>
            </nav>

            <div className={styles.headerActions}>
              <ThemeToggle />
              <a className={styles.headerCta} href="#contact">
                Обсудить проект
              </a>
            </div>
          </header>

          <main className={styles.main}>
            <section className={`${styles.section} ${styles.hero}`} id="top">
              <div className={styles.heroCopy}>
                <span className={styles.sectionEyebrow}>
                  Mr.Hide · сайты и приложения · Краснодарский край
                </span>
                <h1 className={styles.heroTitle}>
                  Строгий digital для частных клиентов, которым нужен аккуратный
                  результат, а не шаблон.
                </h1>
                <p className={styles.heroLead}>
                  Проектирую и собираю лендинги, сайты-визитки, многостраничные
                  сайты и мобильные MVP для iOS и Android. Работаю напрямую,
                  держу фокус на качестве интерфейса и сразу закладываю структуру
                  под локальный коммерческий спрос.
                </p>

                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#contact">
                    Написать в Telegram
                  </a>
                  <a className={styles.secondaryButton} href="#services">
                    Смотреть услуги
                  </a>
                </div>

                <ul className={styles.signalList}>
                  {trustSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>

                <div className={styles.regionRow} aria-label="Города присутствия">
                  {siteConfig.cities.map((city) => (
                    <span key={city} className={styles.regionChip}>
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.visualCard}>
                  <Image
                    src="/arts/hero-lens.svg"
                    alt="Абстрактная композиция из стеклянных панелей и световых сфер"
                    width={900}
                    height={1080}
                    priority
                    sizes="(max-width: 960px) 100vw, 42vw"
                  />
                </div>

                <div className={`${styles.floatingCard} ${styles.topCard}`}>
                  <span className={styles.cardLabel}>Фокус проекта</span>
                  <strong>Сайт, заявка, запуск</strong>
                  <p>
                    Без менеджеров и цепочки согласований. Вы общаетесь напрямую
                    с разработчиком.
                  </p>
                </div>

                <div className={`${styles.floatingCard} ${styles.bottomCard}`}>
                  <span className={styles.cardLabel}>Честная рамка</span>
                  <strong>Без вымышленных кейсов</strong>
                  <p>
                    Вместо легенд показываю подход, структуру, визуал и понятную
                    логику оценки.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section} id="services">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>Услуги</span>
                <h2 className={styles.sectionTitle}>
                  Что можно запустить без студийного шума и корпоративного слоя.
                </h2>
                <p className={styles.sectionLead}>
                  Лендинг ориентирован на частных заказчиков: специалистов,
                  локальные сервисы, частную практику, личный бренд и небольшие
                  продуктовые идеи. Визуал премиальный, подача спокойная, рамка по
                  работе прозрачная.
                </p>
              </div>

              <div className={styles.servicesGrid}>
                {serviceCards.map((service) => (
                  <article key={service.title} className={styles.serviceCard}>
                    <span className={styles.cardLabel}>{service.eyebrow}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <strong className={styles.cardAccent}>{service.accent}</strong>
                  </article>
                ))}
              </div>

              <div className={styles.showcaseRow}>
                <div className={styles.showcaseCopy}>
                  <span className={styles.sectionEyebrow}>Подходит, если</span>
                  <h3 className={styles.showcaseTitle}>
                    нужен сайт для частной услуги, понятный вход в заявку и
                    визуал, который не выглядит дешевым шаблоном.
                  </h3>
                  <p className={styles.showcaseText}>
                    Особенно хорошо такой формат работает для экспертов,
                    консультационных услуг, локальных брендов, сервисов записи,
                    эстетических направлений и ранних MVP, где важна и доверительная
                    подача, и аккуратная технология.
                  </p>
                </div>

                <div className={styles.showcaseVisual}>
                  <Image
                    src="/arts/services-grid.svg"
                    alt="Абстрактная композиция из интерфейсных модулей и световых пластин"
                    width={960}
                    height={760}
                    sizes="(max-width: 960px) 100vw, 42vw"
                  />
                </div>
              </div>
            </section>

            <section className={styles.section} id="process">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>Процесс</span>
                <h2 className={styles.sectionTitle}>
                  Вместо придуманных цифр и «кейс-блоков» показываю, как идет
                  работа на самом деле.
                </h2>
                <p className={styles.sectionLead}>
                  Если у вас пока нет готовых текстов, архитектуры или точной
                  формулировки продукта, это не стоп. Сначала собирается смысл,
                  затем визуальная система и только потом финальная сборка.
                </p>
              </div>

              <div className={styles.processGrid}>
                <div className={styles.processSteps}>
                  {processSteps.map((step, index) => (
                    <article key={step.title} className={styles.stepCard}>
                      <span className={styles.stepIndex}>0{index + 1}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={styles.processVisual}>
                  <Image
                    src="/arts/process-orbit.svg"
                    alt="Абстрактная орбитальная схема процесса разработки"
                    width={840}
                    height={940}
                    sizes="(max-width: 960px) 100vw, 38vw"
                  />
                  <div className={styles.processNote}>
                    <span className={styles.cardLabel}>Что важно</span>
                    <strong>Сначала задача, потом форма.</strong>
                    <p>
                      Премиальный интерфейс держится не на эффектах, а на правильной
                      структуре, воздухе и уважении к содержанию.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section} id="pricing">
              <div className={styles.sectionHeader}>
                <span className={styles.sectionEyebrow}>Стоимость</span>
                <h2 className={styles.sectionTitle}>
                  Минимальный вход по сайтам начинается от 5 000 ₽. Все, что выше,
                  зависит от реального объема, а не от красивой легенды.
                </h2>
                <p className={styles.sectionLead}>
                  На лендинге честно разведены два направления: сайты и мобильные
                  приложения. У них разный уровень сложности, поэтому и логика
                  оценки должна отличаться.
                </p>
              </div>

              <div className={styles.pricingGrid}>
                {pricingCards.map((item) => (
                  <article key={item.eyebrow} className={styles.pricingCard}>
                    <span className={styles.cardLabel}>{item.eyebrow}</span>
                    <h3>{item.price}</h3>
                    <p>{item.description}</p>
                    <ul>
                      {item.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className={styles.faqBlock}>
                <div className={styles.faqIntro}>
                  <span className={styles.sectionEyebrow}>FAQ</span>
                  <h3 className={styles.showcaseTitle}>
                    Частые вопросы, которые обычно задают до старта проекта.
                  </h3>
                </div>

                <div className={styles.faqList}>
                  {faqItems.map((item) => (
                    <details key={item.question} className={styles.faqItem}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.section} id="contact">
              <div className={styles.contactShell}>
                <div className={styles.contactCopy}>
                  <span className={styles.sectionEyebrow}>Контакты</span>
                  <h2 className={styles.sectionTitle}>
                    Если нужен проект без визуального шума и с понятной логикой по
                    задаче, бюджету и запуску, пишите напрямую.
                  </h2>
                  <p className={styles.sectionLead}>
                    Для первого сообщения достаточно четырех пунктов: что за
                    продукт, кто аудитория, какие сроки и есть ли референсы.
                    Региональная подача сейчас собрана под Краснодарский край.
                  </p>

                  <div className={styles.contactActions}>
                    <a
                      className={styles.primaryButton}
                      href={siteConfig.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram: {siteConfig.telegramLabel}
                    </a>
                    <a className={styles.secondaryButton} href={siteConfig.emailHref}>
                      Почта: {siteConfig.emailLabel}
                    </a>
                  </div>

                  <div className={styles.contactMeta}>
                    <span className={styles.regionChip}>{siteConfig.region}</span>
                    {siteConfig.cities.map((city) => (
                      <span key={city} className={styles.regionChip}>
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.briefCard}>
                  <span className={styles.cardLabel}>Что прислать в первом сообщении</span>
                  <ol>
                    {firstMessageChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                  <p>
                    Контакты в этой версии пока оставлены как заглушки. Перед
                    публикацией замените их на реальные Telegram и email.
                  </p>
                </div>
              </div>
            </section>
          </main>

          <footer className={styles.footer}>
            <p>
              © {currentYear} {siteConfig.name}. Частный разработчик сайтов и
              приложений для частных клиентов.
            </p>
            <p>
              Лендинг собран с акцентом на SEO, светлую и темную темы и локальную
              релевантность для Краснодарского края.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
