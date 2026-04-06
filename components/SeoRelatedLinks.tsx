import Link from 'next/link';
import { seoPages } from '@/lib/seo-pages';
import { ArrowRight } from 'lucide-react';

export function SeoRelatedLinks({ currentSlug }: { currentSlug: string }) {
  // Выбираем 3 случайные страницы для перелинковки, кроме текущей, для динамики
  const currentIndex = seoPages.findIndex((p) => p.slug === currentSlug);
  const filtered = seoPages.filter((p) => p.slug !== currentSlug);
  const offset = currentIndex >= 0 ? currentIndex % filtered.length : 0;
  
  const related = [];
  for (let i = 0; i < 3 && i < filtered.length; i++) {
    related.push(filtered[(offset + i) % filtered.length]);
  }

  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-24 px-6 border-t border-white/5 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-white text-center md:text-left">
          Смотрите также
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="group flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300"
            >
              <h3 className="font-display font-medium text-lg text-white mb-3 group-hover:text-zinc-200">
                {page.heading || page.title.split('|')[0]}
              </h3>
              <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-3">
                {page.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-zinc-300 group-hover:text-white mt-auto">
                Подробнее <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
