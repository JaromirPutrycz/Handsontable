import { test, expect } from '@playwright/test';

test.describe('navigation to URL https://handsontable.com/demo', () => {
    test.beforeEach(async ({ page }) => {
    // Go to the starting url https://handsontable.com/demo
    await page.goto('https://handsontable.com/demo');
  });

    test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://handsontable.com/demo');
  });

});