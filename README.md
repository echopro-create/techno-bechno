# WebStudio Landing

Маркетинговый сайт веб-студии на Next.js 16 App Router с тёмной/светлой темой, анимациями на `framer-motion` и базовым тестовым контуром на Vitest.

## Стек

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vitest + Testing Library

## Быстрый старт

```bash
npm install
npm run dev
```

Приложение будет доступно на [http://localhost:3000](http://localhost:3000).

## Скрипты

```bash
npm run dev
npm run lint
npm run test
npm run build
```

## Структура

- `src/app` — маршруты App Router и route-level metadata
- `src/components` — общие UI-компоненты и клиентские анимационные обёртки
- `src/app/contact` — placeholder-логика формы контактов, server action и тесты
- `task.md` — текущий список задач
- `implementation_plan.md` — план реализации с hashline-ссылками

## Что уже реализовано

- У каждой основной страницы есть собственные `title` и `description`
- Контактная форма валидируется и обрабатывается через placeholder Server Action
- На мобильных устройствах доступно меню навигации
- Юридические ссылки ведут на локальные placeholder-страницы

## Текущие ограничения

- Отправка формы пока не интегрирована с email, CRM или Telegram
- Социальные ссылки и Telegram в футере оставлены как безопасные placeholder-элементы
- Контент юридических страниц временный
