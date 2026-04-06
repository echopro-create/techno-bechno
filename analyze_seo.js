const fs = require('fs');
const { JSDOM } = require('jsdom');

async function analyze() {
    let report = '# Подробный технический SEO-аудит `tehnobehno.site` (Лайв + Код)\n\n';
    report += 'Дата: ' + new Date().toISOString() + '\n\n';
    
    // 1. Analyze Lighthouse
    try {
        const lhData = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf-8'));
        report += '## 1. Оценки Lighthouse (Главная)\n';
        report += `- Производительность (Performance): ${lhData.categories.performance.score * 100}\n`;
        report += `- Доступность (Accessibility): ${lhData.categories.accessibility.score * 100}\n`;
        report += `- Лучшие практики (Best Practices): ${lhData.categories['best-practices'].score * 100}\n`;
        report += `- SEO: ${lhData.categories.seo.score * 100}\n\n`;
        
        report += '### Основные проблемы Lighthouse для SEO:\n';
        const seoAudits = lhData.categories.seo.auditRefs;
        let pFound = false;
        for (const ref of seoAudits) {
            const audit = lhData.audits[ref.id];
            if (audit.score !== null && audit.score < 1) {
                report += `- **${audit.title}**\n  _${audit.description}_\n`;
                pFound = true;
            }
        }
        if(!pFound) report += "Ошибок не найдено!\n";
        report += '\n';
    } catch(e) {
        report += 'Не удалось парсить отчет Lighthouse: ' + e.message + '\n\n';
    }

    // 2. Fetch Sitemap URLs and check tags
    report += '## 2. Анализ страниц из Sitemap.xml (Сканирование Live-версии)\n\n';
    
    try {
        const sitemapXml = await fetch('https://tehnobehno.site/sitemap.xml').then(r => r.text());
        const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
        
        report += `Найдено страниц в sitemap: ${urls.length}\n\n`;
        
        for (const url of urls) {
            // we will fetch local to be faster, replace domain
            const localUrl = url;
            try {
                const html = await fetch(localUrl).then(r => r.text());
                const dom = new JSDOM(html);
                const doc = dom.window.document;
                
                const title = doc.querySelector('title')?.textContent || '';
                const desc = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
                const h1s = doc.querySelectorAll('h1');
                let h1Text = '';
                if(h1s.length === 1) h1Text = h1s[0].textContent.trim().replace(/\s+/g, ' ');
                else if(h1s.length > 1) h1Text = `ОШИБКА: ${h1s.length} тегов H1`;
                else h1Text = `ОШИБКА: Нет H1`;
                
                const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'НЕТ';
                
                const missingAlt = [...doc.querySelectorAll('img')].filter(img => !img.hasAttribute('alt')).length;
                
                const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ? 'Да' : 'Нет';
                const schema = doc.querySelector('script[type="application/ld+json"]') ? 'Да' : 'Нет';

                report += `### ${url}\n`;
                report += `- **Title:** ${title} (${title.length} симв.) ${title.length < 30 || title.length > 65 ? '⚠️' : '✅'}\n`;
                report += `- **Description:** ${desc.substring(0, 100)}... (${desc.length} симв.) ${desc.length < 70 || desc.length > 160 ? '⚠️' : '✅'}\n`;
                report += `- **H1:** ${h1Text}\n`;
                report += `- **Canonical:** ${canonical}\n`;
                report += `- **OG Tags:** ${ogTitle}\n`;
                report += `- **Schema.org:** ${schema}\n`;
                report += `- **Изображения без alt.** ${missingAlt > 0 ? `⚠️ ${missingAlt} шт.` : '✅ 0 шт.'}\n\n`;

            } catch(e) {
                report += `### ${url}\n- ❌ Ошибка загрузки: ${e.message}\n\n`;
            }
        }
    } catch(e) {
         report += 'Ошибка парсинга sitemap: ' + e.message + '\n\n';
    }

    fs.writeFileSync('seo_scan_report_new.md', report);
    console.log('Готово. Файл seo_scan_report_new.md создан.');
}

analyze();
