import { test, expect, paths, langs } from './fixtures/site';
import { profile as ptProfile } from '../src/data/pt/profile';
import { profile as enProfile } from '../src/data/en/profile';

const profiles = { pt: ptProfile, en: enProfile };

for (const lang of langs) {
  const resumeFile = profiles[lang].resumeFile;

  test(`resume button points to a valid PDF (${lang})`, async ({ page, request }) => {
    test.skip(!resumeFile, 'No resume PDF configured yet: the resume buttons are hidden until resumeFile is set.');
    await page.goto(paths[lang]);
    const href = await page.locator('.hero').getByRole('link', { name: /PDF/ }).getAttribute('href');
    expect(href).toBe(resumeFile);
    const res = await request.get(href!);
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
    expect((await res.body()).subarray(0, 5).toString()).toBe('%PDF-');
  });

  test(`no dead resume button while there is no resume PDF (${lang})`, async ({ page }) => {
    test.skip(!!resumeFile, 'A resume PDF is configured, covered by the test above.');
    await page.goto(paths[lang]);
    await expect(page.getByRole('link', { name: /PDF|Currículo|Resume/ })).toHaveCount(0);
  });
}
