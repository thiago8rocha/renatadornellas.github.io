import { test, expect, paths, langs } from './fixtures/site';

for (const lang of langs) {
  test(`hero links point to the right destinations (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const hero = page.locator('.hero');
    await expect(hero.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/renatadornellas');
    await expect(hero.getByRole('link', { name: 'Email renatadornellass@gmail.com' })).toHaveAttribute('href', 'mailto:renatadornellass@gmail.com');
  });

  test(`no GitHub link is shown, since there is no GitHub profile (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    await expect(page.getByRole('link', { name: 'GitHub' })).toHaveCount(0);
  });
}
