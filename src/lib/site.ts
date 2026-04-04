export const siteConfig = {
  name: "Mr.Hide",
  title: "Mr.Hide — сайты и приложения для частных клиентов",
  description:
    "Частный разработчик сайтов и приложений для iOS и Android. Лендинги, сайты услуг и MVP с акцентом на Краснодарский край.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  telegramUrl: "https://t.me/your_telegram",
  telegramLabel: "@your_telegram",
  emailHref: "mailto:hello@example.com",
  emailLabel: "hello@example.com",
  emailAddress: "hello@example.com",
  region: "Краснодарский край",
  cities: ["Краснодар", "Сочи", "Новороссийск", "Анапа", "Геленджик"],
  keywords: [
    "разработка сайтов краснодарский край",
    "частный разработчик сайтов краснодар",
    "лендинг заказать краснодар",
    "разработка мобильных приложений краснодар",
    "приложение ios android краснодар",
    "сайт для специалиста",
    "сайт для частной практики",
  ],
} as const;
