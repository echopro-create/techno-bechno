# Implementation Plan

## Контекст и ограничения
- Работа ведётся с placeholder-интеграциями: форма не отправляет данные во внешний сервис, соцсети/Telegram остаются заглушками без битых ссылок.
- `current_problems*` и `hashline_helper.py` в проекте не найдены; для правок используется эквивалентный hashline-подход через line-hash снимки перед каждой сложной правкой.
- В рабочем дереве уже есть несохранённые изменения. Нельзя откатывать чужие правки; коммит возможен только по итогам изолированной реализации.

## План правок
1. `src/components/ThemeToggle.tsx`
   Точка: `1:cdb|"use client";`, `11:b78|    useEffect(() => {`, `15:25e|    if (!mounted) {`
   Изменение: убрать `setState` внутри `useEffect`; перейти на безопасное определение client mount без каскадного ререндера, использовать `resolvedTheme` для корректного переключения темы.

2. `src/app/contact/page.tsx`
   Точки: `56:20e|                            <a href="#" ...`, `87:27b|                        <form ...`, `89:1fd|                                <div className={...name...}`, `148:3e4|                            <button`
   Изменение: вынести интерактивную форму в отдельный клиентский компонент, а страницу вернуть в server component; заменить декоративную форму на рабочую placeholder-submit с `action`, `name`, `method`-совместимым поведением через Server Action, `label`, `required`, `autoComplete`, статусами успеха/ошибки и доступной связью полей.

3. `src/components/Footer.tsx`
   Точки: `23:e95|                        <a href="#" ...`, `52:b27|                        <li><a href="#" ...`, `63:82e|                    <Link href="#" ...`
   Изменение: убрать битые `#`-ссылки. Для Telegram/соцсетей отрендерить безопасные placeholder-элементы без навигации; для юридических ссылок завести локальные placeholder-страницы `/privacy` и `/terms`.

4. `src/components/Header.tsx`
   Точки: `1:cdb|"use client";`, `33:2e6|                <nav className="hidden md:flex items-center gap-1 px-4">`, `56:88e|                <div className="flex items-center gap-2 pr-2">`
   Изменение: добавить мобильное меню вместо полного скрытия навигации на малых экранах, с доступной кнопкой открытия/закрытия и ссылкой на контакт внутри меню.

5. `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/services/page.tsx`, `src/app/portfolio/page.tsx`, `src/app/contact/page.tsx`, `src/app/layout.tsx`
   Точки:
   `src/app/page.tsx` `1:cdb|"use client";`
   `src/app/about/page.tsx` `1:cdb|"use client";`
   `src/app/services/page.tsx` `1:cdb|"use client";`
   `src/app/portfolio/page.tsx` `1:cdb|"use client";`, `3:295|import { Metadata } from "next";`, `5:149|import { ArrowRight, ExternalLink } from "lucide-react";`
   `src/app/contact/page.tsx` `1:cdb|"use client";`
   `src/app/layout.tsx` `13:d2b|export const metadata: Metadata = {`
   Изменение: оставить layout server-side, добавить route-level metadata для `/about`, `/services`, `/portfolio`, `/contact` и `/`; убрать лишние `"use client"` из страниц, вынеся анимационную и форменную интерактивность в отдельные клиентские компоненты. Заодно удалить неиспользуемые импорты в портфолио.

6. Новые файлы
   Изменение:
   - создать клиентские анимационные/форменные компоненты для страниц;
   - создать Server Action/валидационный модуль для contact form placeholder-submit;
   - создать `/privacy` и `/terms` как локальные placeholder-страницы;
   - создать конфиг тестов и setup-файлы.

7. `package.json` и README
   Точки: `package.json` `5:f28|  "scripts": {`, `13:d32|    "lucide-react": "^1.7.0",`
   `README.md` `1:f47|This is a [Next.js]...`, `3:efb|## Getting Started`
   Изменение: добавить `test`-script и devDependencies для unit test контура; переписать README под фактическую структуру `src/app`, скрипты и текущие placeholder-ограничения.

## Тестирование
- Добавить unit tests по AAA для:
  - валидации/нормализации contact form placeholder-submit;
  - рендера/поведения ключевых интерактивных компонентов, где это даёт защиту от регрессий.
- Прогнать:
  - `npm run lint`
  - `npm run test`
  - `npm run build`

## Критерии готовности
- Нет битых `href="#"` в пользовательском UI.
- У страницы контактов рабочий submit-flow с понятным success/error состоянием.
- Для внутренних страниц появляются собственные `title`/`description`.
- На мобильном есть доступ ко всем основным разделам из шапки.
- `lint`, `test`, `build` проходят без новых ошибок.
