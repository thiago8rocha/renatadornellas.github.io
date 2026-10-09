import { test, expect, paths, langs } from './fixtures/site';

for (const lang of langs) {
  test(`home responds 200 with the right heading and language (${lang})`, async ({ page }) => {
    const res = await page.goto(paths[lang]);
    expect(res?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: 'Renata Dornellas' })).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  });
}

test('Portuguese is the default language at the site root', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', 'https://renatadornellas.github.io/');
});

for (const url of ['/robots.txt', '/sitemap-index.xml', '/sitemap-0.xml']) {
  test(`${url} responds 200`, async ({ request }) => {
    expect((await request.get(url)).status()).toBe(200);
  });
}
