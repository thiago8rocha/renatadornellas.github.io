import { test, expect, paths } from './fixtures/site';

test('menu anchors scroll to their sections', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Projetos' }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole('heading', { level: 2, name: 'Trabalhos de que posso falar' })).toBeInViewport();
});

test('show more expands and collapses extra experience bullets', async ({ page }) => {
  await page.goto('/');
  const extra = page.getByText('Apoio estratégias de disseminação da cultura de experiência do cliente');
  const more = page.getByRole('button', { name: 'Mostrar mais 3' }).first();
  await expect(more).toHaveAttribute('aria-expanded', 'false');
  await expect(extra).toBeHidden();
  await more.click();
  await expect(extra).toBeVisible();
  const less = page.getByRole('button', { name: 'Mostrar menos' }).first();
  await expect(less).toHaveAttribute('aria-expanded', 'true');
  await less.click();
  await expect(extra).toBeHidden();
});

test('project filters show only matching projects', async ({ page }) => {
  await page.goto('/');
  const group = page.getByRole('group', { name: 'Filtrar projetos' });
  const people = page.getByRole('heading', { name: 'Projeto de Saúde Emocional' });
  const voc = page.getByRole('heading', { name: 'Programa de Voz do Cliente (VoC)' });
  await group.getByRole('button', { name: 'Pessoas e cultura' }).click();
  await expect(group.getByRole('button', { name: 'Pessoas e cultura' })).toHaveAttribute('aria-pressed', 'true');
  await expect(people).toBeVisible();
  await expect(voc).toBeHidden();
  await group.getByRole('button', { name: 'Pesquisa', exact: true }).click();
  await expect(voc).toBeVisible();
  await expect(people).toBeHidden();
  await group.getByRole('button', { name: 'Todos' }).click();
  await expect(people).toBeVisible();
  await expect(voc).toBeVisible();
});

test('language switch goes to English and back', async ({ page }) => {
  await page.goto(paths.pt);
  await page.getByRole('link', { name: /English/ }).click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.getByRole('heading', { level: 2, name: 'Research, people and culture' })).toBeVisible();
  await page.getByRole('link', { name: /Português/ }).click();
  await expect(page).toHaveURL(/localhost:\d+\/$/);
  await expect(page.getByRole('heading', { level: 2, name: 'Pesquisa, pessoas e cultura' })).toBeVisible();
});

test.describe('theme', () => {
  test.use({ colorScheme: 'dark' });

  test('starts in light mode even when the system prefers dark', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
});

test('theme toggle switches to dark and persists after reload', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Alternar tema escuro' }).click();
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', 'dark');
});
