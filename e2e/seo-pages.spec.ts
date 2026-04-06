import { test, expect } from '@playwright/test';
import { seoPages } from '../lib/seo-pages';

for (const pageData of seoPages) {
  test(`SEO page "${pageData.slug}" loads with heading`, async ({ page }) => {
    await page.goto(`/${pageData.slug}`);
    await expect(page.locator('h1')).toContainText(pageData.heading.split(' ').slice(0, 2).join(' '));
  });
}

test('SEO page has back to home link', async ({ page }) => {
  await page.goto(`/${seoPages[0].slug}`);
  const backLink = page.getByRole('link', { name: 'На главную' });
  await expect(backLink).toBeVisible();
});

test('SEO page has benefits section', async ({ page }) => {
  await page.goto(`/${seoPages[0].slug}`);
  const benefits = page.locator('div[class*="rounded-"]').first();
  await expect(benefits).toBeVisible();
});

test('SEO page has FAQ heading', async ({ page }) => {
  await page.goto(`/${seoPages[0].slug}`);
  await expect(page.getByRole('heading', { name: 'FAQ' })).toBeVisible();
});

test('SEO page has CTA button', async ({ page }) => {
  await page.goto(`/${seoPages[0].slug}`);
  const ctaButton = page.getByRole('link', { name: 'Обсудить проект' }).first();
  await expect(ctaButton).toBeVisible();
});
