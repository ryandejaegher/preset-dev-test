import { test, expect } from '@playwright/test'

test('component is visible', async ({ page }) => {
  await page.goto(
    'http://localhost:6010/iframe.html?globals=&args=&id=components-@@componentFlat--default&viewMode=story'
  )

  const component = await page.locator('@@componentTag')

  await expect(component).toBeVisible()
})
componentTagNoDashes
