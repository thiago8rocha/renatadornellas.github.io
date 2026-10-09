import { test, paths, langs } from './fixtures/site';

for (const lang of langs) {
  for (const theme of ['light', 'dark']) {
    test(`axe finds no violations (${lang}, ${theme})`, async ({ page, audit }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto(paths[lang]);
      await audit(page);
    });
  }
}
