import { test, expect, paths, langs } from './fixtures/site';

const statsLabel = { pt: 'Destaques', en: 'Highlights' };

for (const lang of langs) {
  test(`contact form is labelled and submits through mailto (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const form = page.locator('form.contact-form');
    await expect(form).toHaveAttribute('action', 'mailto:renatadornellass@gmail.com');
    await expect(form.getByRole('textbox')).toHaveCount(3);
    for (const field of await form.getByRole('textbox').all()) {
      await expect(field).toHaveAccessibleName(/.+/);
      await expect(field).toHaveAttribute('required', '');
    }
  });

  test(`hero shows the highlight numbers (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    await expect(page.getByRole('list', { name: statsLabel[lang] }).getByRole('listitem')).toHaveCount(3);
  });
}
