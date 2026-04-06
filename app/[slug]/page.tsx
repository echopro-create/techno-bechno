import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { seoPages, seoPageMap } from '@/lib/seo-pages';
import {
  SeoPageHeader,
  SeoPageBenefits,
  SeoPageWhoFits,
  SeoPageProcess,
  SeoPageTimeline,
  SeoPageTechStack,
  SeoPageCaseStudies,
  SeoPageReviewPolicy,
  SeoPageFaq,
  SeoPageCta,
} from '@/components/seo-page-sections';

export function generateStaticParams() {
  return seoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPageMap[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://tehnobehno.site/${page.slug}`,
      siteName: 'Техно-Бэхно',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: page.heading,
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/og-image.png'],
    },
  };
}

export default async function SeoLanding({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = seoPageMap[slug];

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white/20">
      <BackgroundEffects />

      <main className="relative z-10">
        <SeoPageHeader
          eyebrow={page.eyebrow}
          heading={page.heading}
          intro={page.intro}
          summary={page.summary}
        />

        <SeoPageBenefits benefits={page.benefits} />

        <SeoPageWhoFits
          whoFits={page.whoFits}
          proofPoints={page.proofPoints}
          cta={page.cta}
        />

        <SeoPageProcess process={page.process} />

        <SeoPageTimeline timeline={page.timeline} pricing={page.pricing} />

        <SeoPageTechStack
          techStack={page.techStack}
          industries={page.industries}
        />

        <SeoPageCaseStudies caseStudies={page.caseStudies} />

        <SeoPageReviewPolicy reviewPolicy={page.reviewPolicy} />

        <SeoPageFaq faq={page.faq} />

        <SeoPageCta
          cta={page.cta}
          description={page.description}
          currentSlug={page.slug}
        />
      </main>
    </div>
  );
}
