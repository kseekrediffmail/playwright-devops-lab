import { test, expect } from '@playwright/test';

test('Real Estate Search', async ({ page }) => {
  await page.goto('https://www.realestate.com.au/buy');
  const searchInput = page.getByPlaceholder('Search by state, suburb or postcode');
  await searchInput.fill('Glendenning');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/.*glendenning/);
});