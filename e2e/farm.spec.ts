import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with farm content', async ({ page }) => {
    await page.goto('/')
    // Hero should contain the dynamic title from Drupal
    await expect(page.locator('h1')).toContainText(/Grown with Care|From Our Fields/)
    // Farm name should appear somewhere
    await expect(page.locator('body')).toContainText(/Willowbrook|Sunstone/)
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from the imported content
    await expect(page.locator('body')).toContainText('150')
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText(/Visit the Farm|Come Experience/)
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/products"]')).toBeTruthy()
    await expect(page.locator('a[href="/seasons"]')).toBeTruthy()
    await expect(page.locator('a[href="/recipes"]')).toBeTruthy()
  })
})

test.describe('Products page', () => {
  test('lists all farm products', async ({ page }) => {
    await page.goto('/products')
    await expect(page.locator('h1')).toContainText('Farm Products')
    await expect(page.locator('body')).toContainText('Heirloom Tomatoes')
    await expect(page.locator('body')).toContainText('Pasture-Raised Eggs')
    await expect(page.locator('body')).toContainText('Raw Wildflower Honey')
    await expect(page.locator('body')).toContainText('Grass-Fed Beef')
  })

  test('product detail page renders', async ({ page }) => {
    await page.goto('/products/heirloom-tomatoes')
    await expect(page.locator('body')).toContainText('Heirloom Tomatoes')
    await expect(page.locator('body')).toContainText(/organic|heirloom/i)
  })
})

test.describe('Seasons page', () => {
  test('lists all seasons', async ({ page }) => {
    await page.goto('/seasons')
    await expect(page.locator('h1')).toContainText('Seasonal Guide')
    await expect(page.locator('body')).toContainText('Spring on the Farm')
    await expect(page.locator('body')).toContainText('Summer on the Farm')
    await expect(page.locator('body')).toContainText('Fall on the Farm')
    await expect(page.locator('body')).toContainText('Winter on the Farm')
  })

  test('season detail page renders', async ({ page }) => {
    await page.goto('/seasons/spring')
    await expect(page.locator('body')).toContainText('Spring on the Farm')
  })
})

test.describe('Recipes page', () => {
  test('lists all recipes', async ({ page }) => {
    await page.goto('/recipes')
    await expect(page.locator('h1')).toContainText('Farm Recipes')
    await expect(page.locator('body')).toContainText('Heirloom Tomato Caprese Salad')
    await expect(page.locator('body')).toContainText('Farm-Fresh Vegetable Frittata')
    await expect(page.locator('body')).toContainText('Honey Lavender Cake')
  })

  test('recipe detail page renders', async ({ page }) => {
    await page.goto('/recipes/heirloom-caprese-salad')
    await expect(page.locator('body')).toContainText('Heirloom Tomato Caprese Salad')
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('body')).toContainText('About Willowbrook Farm')
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('body')).toContainText(/Contact|Get in Touch/)
  })
})
