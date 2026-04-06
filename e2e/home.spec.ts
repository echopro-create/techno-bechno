import { test, expect } from '@playwright/test';

test('home page loads with correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Техно-Бэхно/);
  await expect(page.locator('h1')).toContainText(/Создаем/);
});

test('hero section has CTA buttons', async ({ page }) => {
  await page.goto('/');
  const ctaButton = page.getByRole('link', { name: 'Смотреть работы' });
  await expect(ctaButton).toBeVisible();
});

test('services section is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#services')).toBeVisible();
  await expect(page.locator('#services h3')).toHaveCount(3);
});

test('priority directions section has 5 cards', async ({ page }) => {
  await page.goto('/');
  const section = page.getByText('Приоритетные направления');
  await expect(section).toBeVisible();
  const cards = page.locator('section').filter({ hasText: 'Приоритетные направления' }).getByRole('heading', { level: 3 });
  await expect(cards).toHaveCount(5);
});

test('footer contains navigation links', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  await expect(footer.getByRole('heading', { name: 'Навигация' })).toBeVisible();
  await expect(footer.getByRole('heading', { name: 'Направления' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Контакты' })).toBeVisible();
});
