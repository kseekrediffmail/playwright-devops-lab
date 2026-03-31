import { test, expect } from '@playwright/test';

test('verify my career goal site', async ({ page }) => {
  // 1. Go to a website (e.g., a simple test site)
  await page.goto('https://example.com');

  // 2. Check if the header is correct
  const header = page.locator('h1');
  await expect(header).toHaveText('Example Domain');

  // 3. Take a screenshot so you can see it in the report!
  await page.screenshot({ path: 'screenshot.png' });
});