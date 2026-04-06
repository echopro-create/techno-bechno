const fs = require('fs');
const { JSDOM } = require('jsdom');

async function checkLocal() {
    let report = '# Повторная проверка локального сервера (localhost:3000)\n\n';
    
    // Define exact paths to check
    const paths = [
        '/',
        '/contacts',
        '/sozdanie-saitov-krasnodar',
        '/razrabotka-ios-prilozheniy-krasnodar'
    ];
    
    for (const path of paths) {
        try {
            const url = `http://localhost:3000${path}`;
            const html = await fetch(url).then(r => r.text());
            const dom = new JSDOM(html);
            const doc = dom.window.document;
            
            const h1s = doc.querySelectorAll('h1');
            let h1Text = h1s.length > 0 ? h1s[0].textContent.trim().replace(/\s+/g, ' ') : 'Нет H1';
            
            // Check structured data
            const ldJsons = doc.querySelectorAll('script[type="application/ld+json"]');
            let schemas = [];
            ldJsons.forEach(script => {
                try {
                	const parsed = JSON.parse(script.innerHTML);
                	if(Array.isArray(parsed)) {
                	   parsed.forEach(p => schemas.push(p['@type']));
                	} else {
                	   schemas.push(parsed['@type']);
                	}
                } catch(err) {
                    schemas.push('parse_error');
                }
            });
            
            const hasBreadcrumbs = !!doc.querySelector('nav[aria-label="Бредкрамбс"]');

            report += `### Путь: ${path}\n`;
            report += `- **H1 Текст:** ${h1Text}\n`;
            report += `- **Найдена Schema.org:** ${schemas.length > 0 ? schemas.join(', ') : 'Нет'}\n`;
            report += `- **CSS Breadcrumbs UI:** ${hasBreadcrumbs ? 'Есть' : 'Нет'}\n\n`;

        } catch(e) {
            report += `### Путь: ${path}\n❌ Ошибка: ${e.message}\n\n`;
        }
    }
    
    fs.writeFileSync('seo_verification.md', report);
    console.log('Verification finished.');
}
checkLocal();
