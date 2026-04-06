'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { SEO_LANDING_LINKS } from '@/lib/seo-nav';

export function Breadcrumbs({ titleOverride }: { titleOverride?: string }) {
  const pathname = usePathname();
  
  // Do not show breadcrumbs on home
  if (!pathname || pathname === '/') return null;

  // Find current landing config if it exists
  const currentLanding = SEO_LANDING_LINKS.find(link => link.href === pathname);
  
  // Format the title for the breadcrumb
  let currentTitle = titleOverride || currentLanding?.title || 'Страница';
  if (currentTitle.length > 50) {
    currentTitle = currentTitle.split('|')[0] || currentTitle; // Use part before pipe if exists
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://tehnobehno.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentTitle,
        "item": `https://tehnobehno.site${pathname}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Хлебные крошки" className="flex items-center text-sm text-zinc-400 mb-8 overflow-hidden whitespace-nowrap">
        <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
          <Home className="w-4 h-4" />
          <span className="sr-only sm:not-sr-only">Главная</span>
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0 text-zinc-600" />
        <span className="text-zinc-200 truncate font-medium" aria-current="page">
          {currentTitle}
        </span>
      </nav>
    </>
  );
}
