import { test, expect, paths, langs } from './fixtures/site';

for (const lang of langs) {
  test(`no visible TODO markers (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    expect(await page.locator('body').innerText()).not.toMatch(/\bTODO\b/);
  });

  test(`only the logo image, no photo or avatar (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const sources = await page.locator('img').evaluateAll((imgs) => imgs.map((i) => i.getAttribute('src')));
    expect(sources.every((src) => src === '/logo.svg')).toBe(true);
  });
}
