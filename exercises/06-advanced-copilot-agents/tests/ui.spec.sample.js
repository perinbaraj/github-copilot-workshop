// Playwright UI test (SAMPLE / reference solution)
//
// HOW TO USE: This is a reference for the test the agent should generate in
// Step 5 (Challenge 6.7). Copy it to `tests/ui.spec.js` (remove ".sample") once
// you have implemented the priority + due-date + filtering/sorting + dashboard
// feature, then run it against the running Exercise 5 app.
//
// Prerequisites:
//   1. Start the app:   cd exercises/05-real-world-project && node src/server.js
//   2. Install Playwright test runner + browsers:
//        npm install -D @playwright/test
//        npx playwright install
//   3. Run:  npx playwright test tests/ui.spec.js
//
// NOTE: Selectors below assume accessible names/labels in your UI. Adjust them
// to match the markup your agent generates (prefer roles/labels over CSS).

const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Task Manager — priority, due date, filtering & dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('adds a high-priority task with a due date and shows it', async ({ page }) => {
    await page.getByLabel(/title/i).fill('Ship advanced exercise');
    await page.getByLabel(/description/i).fill('Custom agent + skill + MCP');

    // Priority + due date controls (adjust selectors to your markup).
    await page.getByLabel(/priority/i).selectOption('high');
    await page.getByLabel(/due date/i).fill('2030-01-01');

    await page.getByRole('button', { name: /add task/i }).click();

    const item = page.getByText('Ship advanced exercise');
    await expect(item).toBeVisible();
    await expect(page.getByText(/high/i)).toBeVisible();
  });

  test('toggles completion', async ({ page }) => {
    // Assumes at least one task exists (sample data or the one added above).
    const firstCheckbox = page.getByRole('checkbox').first();
    await firstCheckbox.check();
    await expect(firstCheckbox).toBeChecked();
  });

  test('filters by priority', async ({ page }) => {
    // Filter control that shows only high-priority tasks.
    await page.getByRole('button', { name: /high/i }).click();
    // Expect at least one visible task after filtering.
    await expect(page.getByRole('listitem').first()).toBeVisible();
  });

  test('sorts by due date', async ({ page }) => {
    await page.getByRole('button', { name: /sort.*due/i }).click();
    // After sorting, the list should still render.
    await expect(page.getByRole('listitem').first()).toBeVisible();
  });

  test('dashboard shows status counts', async ({ page }) => {
    // A small dashboard summarizing overdue / due-soon / completed counts.
    await expect(page.getByText(/completed/i)).toBeVisible();
    await expect(page.getByText(/overdue|due soon/i)).toBeVisible();
  });
});
