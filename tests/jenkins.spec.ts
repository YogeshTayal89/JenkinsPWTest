import { test, expect } from '@playwright/test';

test('Test Case 1', async ({ page }) => {
    console.log("Starting Test case 1")
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
});

test('Test Case 2', async ({ page }) => {
    console.log("Starting Test case 2")
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
});

test('Test Case 3', async ({ page }) => {
    console.log("Starting Test case 3")
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("GoogleWrong");
});
