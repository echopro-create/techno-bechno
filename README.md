# Techno Bechno

Премиальный русскоязычный лендинг для `Mr.Hide` на `Next.js 16`, собранный под частных заказчиков из Краснодарского края.

## Что внутри

- `Next.js 16.2.2` + `App Router`
- `TypeScript`
- `ESLint`
- светлая и темная темы с ручным переключателем
- SEO-метаданные, `robots.txt`, `sitemap.xml`, JSON-LD
- авторские SVG-визуалы для hero, услуг и процесса

## Запуск

```bash
npm install
npm run dev
```

Production-сборка:

```bash
npm run build
npm start
```

## Что заменить перед публикацией

- Telegram и email в [src/lib/site.ts](/Users/macbook/Work/techno-bechno/src/lib/site.ts)
- при необходимости аналитику и форму заявок
- блок кейсов, когда появятся реальные материалы

## Проверки

```bash
npm run test:run
npm run lint
npm run build
```
