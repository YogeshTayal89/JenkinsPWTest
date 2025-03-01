import { test, expect } from '@playwright/test';

test('Test Case 1', async ({ page }) => {
    console.log("Starting Test case 1")
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
  console.log("Ending  Test case 1")
});

test('Test Case 2', async ({ page }) => {
    console.log("Starting Test case 2")
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
  console.log("Ending  Test case 2")
});

test('Test Case 3', async ({ page }) => {
    console.log("Starting Test case 3")
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
  console.log("Ending  Test case 3")
});

test('Test Case 4', async ({ page }) => {
  console.log("Starting Test case 4")
await page.goto('https://google.com');

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle("Google");
console.log("Ending  Test case 4") // Testing PR Branch flow
});
