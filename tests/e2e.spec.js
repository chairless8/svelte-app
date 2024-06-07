import { test, expect } from '@playwright/test';

test('form submission test', async ({ page }) => {
  await page.goto('http://localhost:5173/#/formTest');

  await page.fill('input[name="floating_name"]', 'John Doe');
  await page.fill('input[name="floating_email"]', 'john@example.com');
  await page.fill('textarea[name="floating_message"]', 'Hello, this is a test message.');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Thank you for your message!')).toBeVisible();
});
