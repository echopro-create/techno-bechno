# Implementation Plan

## Цель
- Привести сайт к premium-визуалу с Apple-подобной навигацией, строгой светлой/тёмной системой, более сильной типографической иерархией и корректной motion/accessibility-базой.

## Контекст и ограничения
- Работа идёт поверх уже изменённого рабочего дерева. Нельзя откатывать существующие правки без явного конфликта.
- Проект на `Next 16 App Router`; перед началом перечитаны локальные `node_modules/next/dist/docs/01-app/index.md` и `node_modules/next/dist/docs/03-architecture/accessibility.md`.
- Официальные внешние ориентиры: Apple WWDC25 `Get to know the new design system`, `Meet Liquid Glass`, Apple `UI Design Dos and Don’ts`.
- `current_problems*` и `hashline_helper.py` в проекте не найдены; используется эквивалентный hashline-подход через line-hash снимки текущего состояния.

## Self-Critique Перед Реализацией
- Риск 1: снова получить “glass landing”, а не системный premium UI.
  Митигирование: ограничить glass навигацией и control surfaces; контентный слой сделать более спокойным и редакционным.
- Риск 2: сделать красивее, но не улучшить navigation clarity.
  Митигирование: расширить header, пересобрать grouping, добавить понятные active/focus/mobile states.
- Риск 3: ухудшить доступность анимациями и низким контрастом.
  Митигирование: добавить `focus-visible`, `skip-link`, `prefers-reduced-motion`, усилить secondary text contrast в light theme.

## Hashline Protocol
- Перед сложными правками используются текущие line-hash якоря; если содержимое строки меняется до применения патча, план должен быть пересмотрен.
- Для больших файлов правки вносятся порциями.

## План Правок
1. Foundation: `src/app/layout.tsx`, `src/app/globals.css`
   Якоря:
   - `src/app/layout.tsx`: `1:2225|import type { Metadata } from "next";`, `13:3826|export const metadata: Metadata = {`, `27:3577|    <html lang="ru" suppressHydrationWarning>`, `28:2514|      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>`, `36:4220|          <main className="flex-grow pt-32">`
   - `src/app/globals.css`: `3:2062|@theme {`, `36:2605|  :root {`, `58:7109|  body {`, `82:1414|  .glass-panel {`, `92:1141|  /* Убираем сильные цветные пятна... */`
   Изменение:
   - заменить декоративный token-set на semantic surface system;
   - встроить `color-scheme`, `themeColor`, skip-link, focus-visible, reduced motion;
   - перейти на более Apple-совместимый system font stack и общие layout utility-классы.

2. Навигация и theme controls: `src/components/Header.tsx`, `src/components/ThemeToggle.tsx`
   Якоря:
   - `src/components/Header.tsx`: `22:2191|        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">`, `23:3494|            <div className="relative w-full max-w-2xl">`, `37:5885|                    <nav className="hidden md:flex items-center gap-1 px-4">`, `60:3330|                    <div className="flex items-center gap-2 pr-2">`, `83:3837|                        <motion.nav`
   - `src/components/ThemeToggle.tsx`: `7:1326|export function ThemeToggle() {`, `21:1190|    return (`
   Изменение:
   - расширить и упростить верхний bar;
   - исправить active, focus, hit area и mobile grouping;
   - сделать theme toggle визуально системным и устойчивым в обеих темах.

3. Motion layer: `src/components/Animated.tsx`
   Якоря:
   - `20:1957|const defaultViewport = {`
   - `56:1141|export function FadeIn({ children, className, delay = 0 }: MotionProps) {`
   - `69:4121|export function Reveal({ children, className, delay = 0 }: MotionProps) {`
   - `83:2265|export function HoverLift({`
   Изменение:
   - смягчить motion;
   - убрать зависимость восприятия страницы от reveal-on-scroll;
   - учесть `prefers-reduced-motion`.

4. Главная страница: `src/app/page.tsx`
   Якоря:
   - `37:4141|export default function Home() {`
   - `40:4184|      <section className="w-full px-6 pt-10 pb-16 md:pt-16 md:pb-24 min-h-[calc(100svh-8rem)] flex flex-col items-center justify-center text-center relative overflow-hidden">`
   - `83:3996|      <section className="w-full max-w-7xl px-6 py-32 z-10 relative">`
   - `137:4523|      <section className="w-full max-w-7xl px-6 py-32 border-t border-[color:var(--border)]/50">`
   - `170:1759|      <section className="w-full px-6 py-32 mt-16 text-center relative overflow-hidden">`
   Изменение:
   - заменить центрированный шаблонный hero на более editorial/premium layout;
   - сократить visual noise;
   - усилить презентацию услуг, процесса и CTA.

5. Вторичные страницы: `src/app/services/page.tsx`, `src/app/about/page.tsx`, `src/app/portfolio/page.tsx`, `src/app/contact/page.tsx`
   Якоря:
   - `src/app/services/page.tsx`: `65:3856|export default function ServicesPage() {`, `67:3957|    <div className="flex flex-col items-center pb-32 mesh-bg min-h-screen">`, `82:2412|      <section className="w-full max-w-7xl px-6">`
   - `src/app/about/page.tsx`: `52:6581|export default function AboutPage() {`, `54:3957|    <div className="flex flex-col items-center pb-32 mesh-bg min-h-screen">`, `68:3219|      <section className="w-full max-w-7xl px-6 py-24">`
   - `src/app/portfolio/page.tsx`: `43:8034|export default function PortfolioPage() {`, `58:2412|      <section className="w-full max-w-7xl px-6">`, `66:2794|              <div`
   - `src/app/contact/page.tsx`: `12:1666|export default function ContactPage() {`, `27:2743|      <section className="w-full max-w-6xl px-6 py-8 relative z-10">`, `35:2381|              <a`
   Изменение:
   - привести все страницы к единому visual language;
   - убрать повторяющийся “hero + cards” паттерн;
   - усилить кейсы, доверие и контактный путь.

6. Низ страницы и форма: `src/components/Footer.tsx`, `src/app/contact/ContactForm.tsx`
   Якоря:
   - `src/components/Footer.tsx`: `8:1302|        <footer className="border-t border-[color:var(--border)] pt-20 pb-10 bg-[color:var(--card)]/30 backdrop-blur-3xl">`, `35:2444|                <div className="col-span-1 md:col-span-4 lg:col-span-2 lg:col-start-7">`, `75:8959|            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[color:var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">`
   - `src/app/contact/ContactForm.tsx`: `30:1758|function SubmitButton() {`, `55:3422|  return (`, `61:1362|      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">`, `176:3613|      {state.message ? (`
   Изменение:
   - сделать footer спокойнее и чище;
   - довести форму до уровня нового surface/input system.

## Тестирование
- Прогнать:
  - `npm run lint`
  - `npm run test`
  - `npm run build`

## Критерии Готовности
- Header и mobile navigation выглядят собранно и не ломают композицию.
- Светлая и тёмная темы читаемы и визуально консистентны.
- Glass/blur используется ограниченно и не мешает иерархии.
- Страницы читаются как premium editorial website, а не шаблонный landing.
- `lint`, `test`, `build` проходят.
