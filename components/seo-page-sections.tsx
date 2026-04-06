import Link from 'next/link';
import type { SeoPage, SeoFaq, SeoListItem, SeoCase } from '@/lib/seo-pages';
import { CONTACT_CTA } from '@/lib/company-profile';
import { seoPages } from '@/lib/seo-pages';

type SeoPageHeaderProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  summary: string;
};

export function SeoPageHeader({ eyebrow, heading, intro, summary }: SeoPageHeaderProps) {
  return (
    <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-400">
          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:border-white/30 hover:text-white"
          >
            На главную
          </Link>
          <a
            href={CONTACT_CTA.href}
            className="rounded-full bg-white px-4 py-2 font-medium text-black transition-transform hover:scale-[1.03]"
          >
            {CONTACT_CTA.primaryLabel}
          </a>
        </div>

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          {heading}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
          {intro}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 md:text-lg">
          {summary}
        </p>
      </div>
    </section>
  );
}

type SeoPageBenefitsProps = {
  benefits: string[];
};

export function SeoPageBenefits({ benefits }: SeoPageBenefitsProps) {
  return (
    <section className="px-6 pb-10">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {benefits.map((item) => (
          <div
            key={item}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-base leading-7 text-zinc-200 backdrop-blur-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

type SeoPageWhoFitsProps = {
  whoFits: string[];
  proofPoints: string[];
  cta: string;
};

export function SeoPageWhoFits({ whoFits, proofPoints, cta }: SeoPageWhoFitsProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Кому подходит
          </h2>
          <ul className="space-y-4 text-lg leading-8 text-zinc-300">
            {whoFits.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Что вы получаете
          </h2>
          <ul className="mt-6 space-y-4 text-zinc-300">
            {proofPoints.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-zinc-400">{cta}</p>
        </div>
      </div>
    </section>
  );
}

type SeoPageProcessProps = {
  process: SeoListItem[];
};

export function SeoPageProcess({ process }: SeoPageProcessProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Как проходит работа
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                Этап {index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SeoPageTimelineProps = {
  timeline: SeoListItem[];
  pricing: SeoListItem[];
};

export function SeoPageTimeline({ timeline, pricing }: SeoPageTimelineProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Сроки и формат запуска
          </h2>
          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 px-5 py-4">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Стоимость и модель оценки
          </h2>
          <div className="mt-6 space-y-4">
            {pricing.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 px-5 py-4">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type SeoPageTechStackProps = {
  techStack: string[];
  industries: string[];
};

export function SeoPageTechStack({ techStack, industries }: SeoPageTechStackProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Стек и подход
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Отрасли и сценарии
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {industries.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type SeoPageCaseStudiesProps = {
  caseStudies: SeoCase[];
};

export function SeoPageCaseStudies({ caseStudies }: SeoPageCaseStudiesProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Типовые кейс-сценарии
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          Ниже не вымышленные отзывы и не фальшивые цифры, а типовые продуктовые сценарии, в которых такая услуга особенно уместна.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {item.format}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-300">
                <span className="font-medium text-white">Задача:</span> {item.challenge}
              </p>
              <p className="mt-3 leading-7 text-zinc-300">
                <span className="font-medium text-white">Результат:</span> {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SeoPageReviewPolicyProps = {
  reviewPolicy: string;
};

export function SeoPageReviewPolicy({ reviewPolicy }: SeoPageReviewPolicyProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Отзывы и рекомендации
        </h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-300">
          {reviewPolicy}
        </p>
      </div>
    </section>
  );
}

type SeoPageFaqProps = {
  faq: SeoFaq[];
};

export function SeoPageFaq({ faq }: SeoPageFaqProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">FAQ</h2>
        <div className="mt-8 grid gap-4">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <h3 className="text-xl font-medium text-white">{item.q}</h3>
              <p className="mt-3 text-zinc-300">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SeoPageCtaProps = {
  cta: string;
  description: string;
  currentSlug: string;
};

export function SeoPageCta({ cta, description, currentSlug }: SeoPageCtaProps) {
  return (
    <section className="px-6 pt-8 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Следующий шаг</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          {cta}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={CONTACT_CTA.href}
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
          >
            {CONTACT_CTA.primaryLabel}
          </a>
          <Link
            href="/contacts"
            className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Контакты и география
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {seoPages.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                item.slug === currentSlug
                  ? 'border-white bg-white text-black'
                  : 'border-white/10 text-zinc-300 hover:border-white/30 hover:text-white'
              }`}
            >
              {item.heading}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
