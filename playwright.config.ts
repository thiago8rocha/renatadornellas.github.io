import { defineConfig, devices } from '@playwright/test';

const port = 4321;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }], ['list']],
  use: { baseURL: `http://localhost:${port}`, trace: 'on-first-retry' },
  webServer: {
    command: 'npm run build && npm run preview -- --host localhost',
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 360, height: 740 } } },
  ],
});
