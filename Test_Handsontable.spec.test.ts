import { test, expect, selectors } from '@playwright/test';

//For easier data change
const COUNTRY = "Brazil";
const COUNTRY_COL_INDEX = 4;
const DATE_COL_INDEX = 9;
const DATE_LABEL = "Login date";

test.describe('Handsontable Demo Page', () => {
    test('Navigate Handsontable Demo Page Filter and sort data', async ({ page }) => {
        //1.Navigate to the Handsontable Demo Page:
        await page.goto('https://handsontable.com/demo');
        await page.getByText('Demo');
        await page.locator("xpath=(//a[normalize-space()='Demo'])").click;
        expect(page.getByRole('columnheader', { name: 'Country' }).locator('span')).toBeVisible;
        //2.Filter Data for Orders from China:
        await page.locator(`.ht_master th[aria-colindex="${COUNTRY_COL_INDEX}"]:has(span:has-text("Country")) button`).click({ force: true });
        await expect(page.locator('.htDropdownMenu')).toBeVisible();
        await page.locator('.htUISelectionControls a:has-text("Clear")').click();
        await page.locator('.htCheckboxRendererLabel:has-text("' + COUNTRY + '")').click();
        //3.Sort Filtered Data by Date:
        const dateColumnHeader = `.ht_master th:has(span:has-text("${DATE_LABEL}"))`;
        await page.locator(dateColumnHeader).click({ force: true });
        await page.locator(dateColumnHeader).click({ force: true });
        //4.Verify Results:
        const countryCells = page.locator(`.ht_master tbody td:has([aria-colindex="${COUNTRY_COL_INDEX}"])`);
        const countryValues = await countryCells.allTextContents();
        for (const value of countryValues) {
            expect(value).toBe(COUNTRY);
        }
        const dateCells = page.locator(`.ht_master tbody td[aria-colindex="${DATE_COL_INDEX}"]`);
        const dateValues = await dateCells.allTextContents();
        const sortedDates = [...dateValues].sort((a, b) => {
            const dateA = new Date(a);
            const dateB = new Date(b);
            return dateB.getTime() - dateA.getTime();
          });
        expect(dateValues).toEqual(sortedDates);
    });

})
