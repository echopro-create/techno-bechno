import Image from "next/image";
import { StructuredData } from "@/components/structured-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

const manifestoItems = [
  {
    title: "Не студия на словах",
    text: "Один исполнитель, прямая коммуникация и решение без искусственного слоя менеджмента.",
  },
  {
    title: "Не шаблон по сетке",
    text: "Сначала смысл, затем маршрут заявки, потом интерфейс. Не наоборот.",
  },
  {
    title: "Не дешевый premium",
    text: "Минимальная цена есть, но подача и оценка остаются честными по объему задачи.",
  },
] as const;

const services = [
  {
    index: "01",
    title: "Лендинги и сайты услуг",
    text: "Для частной практики, локального бренда, рекламы услуги, записи, консультаций и личного бренда.",
    tags: ["Первый экран", "Маршрут до заявки", "Мобильная версия"],
  },
  {
    index: "02",
    title: "Сайты с длинной логикой",
    text: "Когда одной страницы мало и нужно разложить услуги, разделы, FAQ, структуру контента и SEO-подачу по региону.",
    tags: ["Навигация", "Контент", "Локальная структура"],
  },
  {
    index: "03",
    title: "iOS / Android / MVP",
    text: "Для сервисов, кабинетов, каталогов, записи и ранних продуктовых сценариев, где уже нужен мобильный слой.",
    tags: ["Разбор объема", "Маршрут разработки", "Оценка после брифа"],
  },
] as const;

const processSteps = [
  {
    title: "Фиксация задачи",
    text: "Разбираем, что именно нужно: лендинг, сайт с более длинной логикой или приложение.",
  },
  {
    title: "Структура и текст",
    text: "Собираем порядок блоков, заголовки, подачу и переходы к целевому действию.",
  },
  {
    title: "Визуальная система",
    text: "Типографика, свет, ритм, темы, собственные графические элементы и интерфейсные состояния.",
  },
  {
    title: "Сборка и запуск",
    text: "SEO-метаданные, адаптивность, тесты, сборка и выпуск без мусора в финальном результате.",
  },
] as const;

const pricingRows = [
  {
    label: "Простой старт для сайта",
    value: "от 5 000 ₽",
    text: "Подходит для узкой задачи, одного экрана, базового промо или точечной доработки, когда объем заранее понятен.",
  },
  {
    label: "Сайт под конкретную задачу",
    value: "по смете",
    text: "Когда нужны несколько сценариев, больше контента, формы, анимация, интеграции и внятная локальная структура.",
  },
  {
    label: "Приложение или MVP",
    value: "после брифа",
    text: "Для мобильного продукта цена без сценариев и границ первой версии всегда будет выдумкой. Так я не работаю.",
  },
] as const;

const faqItems = [
  {
    question: "Можно начать с сайта, а приложение сделать позже?",
    answer:
      "Да. Для частных клиентов это обычно правильнее: сначала проверить спрос и подачу через сайт, а потом решать, нужен ли мобильный продукт.",
  },
  {
    question: "Почему здесь нет кейсов и отзывов?",
    answer:
      "Потому что я не закрываю отсутствие доказательств фальшивыми блоками. Здесь доверие строится через уровень интерфейса, ясность процесса и честную подачу.",
  },
  {
    question: "Работаете только по Краснодарскому краю?",
    answer:
      "Работа удаленная, но версия сайта и SEO-подача собраны под Краснодарский край и локальный коммерческий спрос.",
  },
] as const;

const contactChecklist = [
  "Кто вы и какой продукт или услуга у вас сейчас.",
  "Что нужно: лендинг, сайт, редизайн или приложение.",
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
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>
                  Mr.Hide · сайты и приложения · Краснодарский край
                </span>
                <h1 className={styles.heroTitle}>
                  Сайты и приложения для частных клиентов.
                </h1>
                <p className={styles.heroLead}>
                  Спокойный premium без студийной мишуры: лендинги, сайты услуг и
                  мобильные MVP, собранные вокруг смысла, а не вокруг визуального
                  шума.
                </p>

                <div className={styles.heroActions}>
                  <a className={styles.primaryAction} href="#contact">
                    Написать в Telegram
                  </a>
                  <a className={styles.secondaryAction} href="#services">
                    Смотреть направления
                  </a>
                </div>

                <div className={styles.heroFacts}>
                  <span>от 5 000 ₽</span>
                  <span>iOS / Android</span>
                  <span>Прямая связь</span>
                </div>
              </div>

              <div className={styles.heroStage}>
                <div className={styles.heroArt}>
                  <Image
                    src="/arts/hero-lens.svg"
                    alt="Абстрактная световая композиция в строгом премиальном стиле"
                    width={900}
                    height={1080}
                    priority
                    sizes="(max-width: 960px) 100vw, 42vw"
                  />
                </div>
                <div className={styles.heroNote}>
                  <span className={styles.eyebrow}>Формула</span>
                  <strong>Один человек. Одна система. Один ясный результат.</strong>
                </div>
              </div>
            </section>

            <section className={styles.manifesto}>
              <div className={styles.manifestoIntro}>
                <span className={styles.eyebrow}>Подход</span>
                <h2 className={styles.sectionTitle}>
                  Дорогой интерфейс начинается не с эффектов, а с дисциплины.
                </h2>
              </div>

              <div className={styles.manifestoGrid}>
                {manifestoItems.map((item) => (
                  <article key={item.title} className={styles.manifestoItem}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.services} id="services">
              <div className={styles.servicesIntro}>
                <span className={styles.eyebrow}>Направления</span>
                <h2 className={styles.sectionTitle}>
                  Не все подряд. Только то, что действительно нужно частному
                  заказчику.
                </h2>
              </div>

              <div className={styles.servicesLayout}>
                <div className={styles.servicesList}>
                  {services.map((service) => (
                    <article key={service.index} className={styles.serviceRow}>
                      <span className={styles.serviceIndex}>{service.index}</span>
                      <div className={styles.serviceContent}>
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                      </div>
                      <ul className={styles.serviceTags}>
                        {service.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <aside className={styles.servicesVisual}>
                  <Image
                    src="/arts/services-grid.svg"
                    alt="Сдержанная композиция из интерфейсных плоскостей"
                    width={960}
                    height={760}
                    sizes="(max-width: 960px) 100vw, 32vw"
                  />
                  <p>
                    Лучше всего такой подход работает там, где важны доверие,
                    тишина и взрослый визуальный язык: частная практика, локальные
                    услуги, личный бренд, консультации и ранние продукты.
                  </p>
                </aside>
              </div>
            </section>

            <section className={styles.process} id="process">
              <div className={styles.processIntro}>
                <span className={styles.eyebrow}>Процесс</span>
                <h2 className={styles.sectionTitle}>
                  Сначала задача, затем структура, потом интерфейс.
                </h2>
              </div>

              <div className={styles.processLayout}>
                <div className={styles.processVisual}>
                  <Image
                    src="/arts/process-orbit.svg"
                    alt="Орбитальная схема процесса разработки"
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

            <section className={styles.pricing} id="pricing">
              <div className={styles.pricingIntro}>
                <span className={styles.eyebrowInverse}>Стоимость</span>
                <h2 className={styles.pricingTitle}>
                  5 000 ₽ это старт простой страницы. Приложение не должно
                  притворяться дешевым.
                </h2>
              </div>

              <div className={styles.pricingLayout}>
                <div className={styles.priceHero}>
                  <span>Старт</span>
                  <strong>5 000 ₽</strong>
                  <p>Минимальный вход для простой посадочной страницы или узкой задачи.</p>
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

              <div className={styles.faqGrid}>
                {faqItems.map((item) => (
                  <details key={item.question} className={styles.faqItem}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className={styles.contact} id="contact">
              <div className={styles.contactLead}>
                <span className={styles.eyebrow}>Контакт</span>
                <h2 className={styles.sectionTitle}>
                  Если нужен сайт или продукт без визуального мусора, пишите
                  напрямую.
                </h2>
                <p className={styles.sectionText}>
                  В этой версии контакты еще оставлены как заглушки. Перед
                  публикацией замените Telegram и email на реальные.
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

              <div className={styles.contactChecklist}>
                <span className={styles.eyebrow}>Что прислать в первом сообщении</span>
                <ol>
                  {contactChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p className={styles.contactMeta}>
                  Географическая подача сайта собрана под {siteConfig.region}.
                </p>
              </div>
            </section>
          </main>

          <footer className={styles.footer}>
            <p>
              © {currentYear} {siteConfig.name}. Частный разработчик сайтов и
              приложений.
            </p>
            <p>
              Краснодарский край · светлая и темная темы · SEO-first структура
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
