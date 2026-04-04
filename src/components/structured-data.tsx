import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "ru-RU",
        description: siteConfig.description,
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: "Частный разработчик сайтов и мобильных приложений",
        description: siteConfig.description,
        email: siteConfig.emailAddress,
        sameAs: [siteConfig.telegramUrl],
        address: {
          "@type": "PostalAddress",
          addressRegion: siteConfig.region,
          addressCountry: "RU",
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: siteConfig.region,
          },
        ],
        knowsAbout: [
          "Разработка сайтов",
          "Лендинги",
          "Многостраничные сайты",
          "iOS",
          "Android",
          "MVP",
          "SEO-структура",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги Mr.Hide",
          itemListElement: [
            {
              "@type": "Offer",
              priceCurrency: "RUB",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: 5000,
                priceCurrency: "RUB",
              },
              itemOffered: {
                "@type": "Service",
                name: "Разработка лендингов и сайтов",
                areaServed: siteConfig.region,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Разработка мобильных приложений для iOS и Android",
                areaServed: siteConfig.region,
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
