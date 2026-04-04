import Image from "next/image";
import { StructuredData } from "@/components/structured-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

const principles = [
  {
    title: "Тихая подача",
    text: "Без баннерной суеты, перегруза и ощущения дешевого шаблона.",
  },
  {
    title: "Ясная структура",
    text: "Сначала смысл и маршрут заявки. Потом типографика, свет и темп страницы.",
  },
  {
    title: "Личный контакт",
    text: "Вы общаетесь напрямую с разработчиком, а не проходите через цепочку менеджеров.",
  },
] as const;

const serviceBands = [
  {
    index: "01",
    title: "Лендинги и сайты услуг",
    description:
      "Для частной практики, локального бренда, специалиста, сервиса записи или точечного рекламного оффера.",
    bullets: [
      "Сильный первый экран",
      "Коммерческий маршрут до заявки",
      "Мобильная версия без деградации",
    ],
  },
  {
    index: "02",
    title: "Сайты с более длинной логикой",
    description:
      "Когда одной страницы мало и нужно разложить услуги, навигацию, контент, FAQ и локальную SEO-структуру.",
    bullets: [
      "Многостраничная архитектура",
      "Тон и ритм контента",
      "Основа для дальнейшего роста",
    ],
  },
  {
    index: "03",
    title: "iOS / Android / MVP",
    description:
      "Для тех случаев, когда нужен уже не только сайт, а рабочий мобильный сценарий: запись, кабинет, каталог или сервис.",
    bullets: [
      "Разбор объема до старта",
      "Нативный или кроссплатформенный маршрут",
      "Оценка без искусственного демпинга",
    ],
  },
] as const;

const processSteps = [
  {
    title: "Фиксируем задачу",
    text: "Что продаем, кому, через какой сценарий и какое решение действительно нужно: лендинг, сайт или приложение.",
  },
  {
    title: "Собираем форму смысла",
    text: "Структура, заголовки, порядок блоков, темп чтения и точки перехода к заявке.",
  },
  {
    title: "Строим визуальную систему",
    text: "Типографика, материалы, темная и светлая темы, собственные графические элементы и состояния интерфейса.",
  },
  {
    title: "Проверяем и запускаем",
    text: "Адаптивность, SEO-метаданные, скорость, доступность, после чего сайт или MVP можно спокойно выпускать.",
  },
] as const;

const pricingRows = [
  {
    label: "Старт для простого сайта",
    value: "от 5 000 ₽",
    text: "Подходит для узкой задачи, одного экрана, базового промо или точечной доработки, когда объем заранее понятен.",
  },
  {
    label: "Сайт с более длинной структурой",
    value: "по смете",
    text: "Когда нужны несколько сценариев, глубже контент, больше секций, формы, анимация и аккуратная локальная SEO-логика.",
  },
  {
    label: "Приложение или MVP",
    value: "после брифа",
    text: "Для мобильных продуктов обещать цену без сценариев и объема нечестно. Сначала раскладываем первую версию, затем оцениваем.",
  },
] as const;

const faqItems = [
  {
    question: "Можно начать с сайта, а к приложению вернуться позже?",
    answer:
      "Да. Для частных клиентов это обычно самый разумный маршрут: сначала проверить спрос через сайт или лендинг, потом решать, нужен ли мобильный продукт.",
  },
  {
    question: "Почему здесь нет кейсов и отзывов?",
    answer:
      "Потому что я не подменяю доверие выдумкой. В этой версии лендинга упор сделан на уровень интерфейса, структуру и честную логику работы.",
  },
  {
    question: "Работаете только по Краснодарскому краю?",
    answer:
      "Формат работы удаленный, но подача и SEO этой версии собраны именно под Краснодарский край и локальный коммерческий спрос.",
  },
] as const;

const messageChecklist = [
  "Кто вы и какой у вас продукт или услуга.",
  "Что нужно сейчас: лендинг, сайт, редизайн или приложение.",
  "Есть ли сроки, референсы и желаемый сценарий заявки.",
  "Какой трафик планируете использовать после запуска.",
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
              <span className={styles.brandText}>
                <strong>Mr.Hide</strong>
                <span>Private Web & Mobile</span>
              </span>
            </a>

            <nav className={styles.nav} aria-label="Навигация по лендингу">
              <a href="#services">Услуги</a>
              <a href="#process">Процесс</a>
              <a href="#pricing">Стоимость</a>
              <a href="#contact">Контакт</a>
            </nav>

            <div className={styles.headerTools}>
              <ThemeToggle />
              <a className={styles.headerLink} href="#contact">
                Telegram
              </a>
            </div>
          </header>

          <main className={styles.main}>
            <section className={styles.hero} id="top">
              <div className={styles.heroGrid}>
                <div className={styles.heroCopy}>
                  <span className={styles.eyebrow}>
                    Mr.Hide · частная разработка · Краснодарский край
                  </span>
                  <h1 className={styles.heroTitle}>
                    Сайты и приложения, которые говорят тихо, но выглядят дорого.
                  </h1>
                  <p className={styles.heroLead}>
                    Я проектирую лендинги, сайты услуг и мобильные MVP для частных
                    клиентов. Без агентского шума, без дешевого визуального шума,
                    с акцентом на ритм, структуру и ясную коммерческую подачу.
                  </p>

                  <div className={styles.heroActions}>
                    <a className={styles.primaryAction} href="#contact">
                      Написать в Telegram
                    </a>
                    <a className={styles.secondaryAction} href="#services">
                      Посмотреть направления
                    </a>
                  </div>

                  <p className={styles.heroMeta}>
                    Краснодар · Сочи · Новороссийск · Анапа · Геленджик
                  </p>
                </div>

                <div className={styles.heroStage}>
                  <div className={styles.stageVisual}>
                    <Image
                      src="/arts/hero-lens.svg"
                      alt="Абстрактная премиальная композиция из стеклянных форм и направленного света"
                      width={900}
                      height={1080}
                      priority
                      sizes="(max-width: 960px) 100vw, 42vw"
                    />
                  </div>
                  <div className={styles.stageNote}>
                    <span className={styles.eyebrow}>Ось проекта</span>
                    <strong>Один исполнитель. Одна система. Один маршрут решения.</strong>
                    <p>
                      Если задача небольшая, не нужно строить вокруг нее видимость
                      большой студии. Нужен точный результат.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.principles}>
                {principles.map((item) => (
                  <article key={item.title} className={styles.principle}>
                    <span className={styles.principleIndex}>{item.title}</span>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.servicesSection} id="services">
              <div className={styles.sectionIntro}>
                <span className={styles.eyebrow}>Направления</span>
                <h2 className={styles.sectionTitle}>
                  Не все для всех. Только те форматы, которые действительно нужны
                  частному заказчику.
                </h2>
              </div>

              <div className={styles.servicesLayout}>
                <div className={styles.serviceBands}>
                  {serviceBands.map((band) => (
                    <article key={band.index} className={styles.serviceBand}>
                      <span className={styles.serviceIndex}>{band.index}</span>
                      <div className={styles.serviceBody}>
                        <h3>{band.title}</h3>
                        <p>{band.description}</p>
                      </div>
                      <ul className={styles.serviceList}>
                        {band.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <aside className={styles.servicesAside}>
                  <Image
                    src="/arts/services-grid.svg"
                    alt="Сдержанная композиция из интерфейсных панелей и световых плоскостей"
                    width={960}
                    height={760}
                    sizes="(max-width: 960px) 100vw, 32vw"
                  />
                  <p>
                    Такой подход лучше всего работает там, где важно не выглядеть
                    шумно: частная практика, локальная услуга, личный бренд,
                    эстетический сервис, консультации, ранний MVP.
                  </p>
                </aside>
              </div>
            </section>

            <section className={styles.processSection} id="process">
              <div className={styles.processLead}>
                <span className={styles.eyebrow}>Процесс</span>
                <h2 className={styles.sectionTitle}>
                  Если у проекта еще нет формы смысла, его не спасет даже дорогой
                  интерфейс.
                </h2>
                <p className={styles.sectionText}>
                  Поэтому работа идет не от декоративных эффектов, а от правильного
                  порядка: задача, структура, визуальная система, затем сборка и
                  запуск.
                </p>
              </div>

              <div className={styles.processLayout}>
                <div className={styles.processVisual}>
                  <Image
                    src="/arts/process-orbit.svg"
                    alt="Абстрактная орбитальная схема процесса разработки"
                    width={840}
                    height={940}
                    sizes="(max-width: 960px) 100vw, 34vw"
                  />
                </div>

                <div className={styles.timeline}>
                  {processSteps.map((step) => (
                    <article key={step.title} className={styles.timelineItem}>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.pricingSection} id="pricing">
              <div className={styles.pricingIntro}>
                <span className={styles.eyebrowAlt}>Стоимость</span>
                <h2 className={styles.pricingTitle}>
                  Сайт может стартовать от 5 000 ₽. Приложение не должно
                  притворяться дешевым.
                </h2>
                <p className={styles.pricingLead}>
                  Здесь честно разведены два разных продукта: сайт как быстрый
                  коммерческий инструмент и мобильное приложение как более длинная
                  продуктовая задача.
                </p>
              </div>

              <div className={styles.pricingMatrix}>
                <div className={styles.priceAnchor}>
                  <span>от</span>
                  <strong>5 000 ₽</strong>
                  <p>минимальный вход для простой посадочной страницы или узкой задачи</p>
                </div>

                <div className={styles.priceRows}>
                  {pricingRows.map((row) => (
                    <article key={row.label} className={styles.priceRow}>
                      <div>
                        <span className={styles.priceLabel}>{row.label}</span>
                        <strong>{row.value}</strong>
                      </div>
                      <p>{row.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className={styles.faqList}>
                {faqItems.map((item) => (
                  <details key={item.question} className={styles.faqItem}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className={styles.contactSection} id="contact">
              <div className={styles.contactPanel}>
                <span className={styles.eyebrow}>Контакт</span>
                <h2 className={styles.sectionTitle}>
                  Если нужен спокойный, взрослый интерфейс без студийной мишуры,
                  пишите напрямую.
                </h2>
                <p className={styles.sectionText}>
                  На этой версии контакты пока оставлены как заглушки. Перед
                  публикацией их нужно заменить на реальные Telegram и email.
                </p>

                <div className={styles.contactActions}>
                  <a
                    className={styles.primaryAction}
                    href={siteConfig.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram: {siteConfig.telegramLabel}
                  </a>
                  <a className={styles.secondaryAction} href={siteConfig.emailHref}>
                    Почта: {siteConfig.emailLabel}
                  </a>
                </div>
              </div>

              <div className={styles.contactAside}>
                <span className={styles.eyebrow}>Что написать в первом сообщении</span>
                <ol>
                  {messageChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p className={styles.contactMeta}>
                  Региональная логика сайта собрана под {siteConfig.region}.
                </p>
              </div>
            </section>
          </main>

          <footer className={styles.footer}>
            <p>
              © {currentYear} {siteConfig.name}. Частный разработчик сайтов и
              приложений для частных клиентов.
            </p>
            <p>
              Светлая и темная темы, SEO-структура и локальная подача под{" "}
              {siteConfig.region}.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
