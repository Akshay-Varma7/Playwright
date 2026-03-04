import {test,epect} from "@playwright/test";

//login should be checked-but not entire login logic and filling
test.use({ storageState : /*path*/ 'playwright/.auth.json'});

test("create study",async ()=>{
    await page.goto("/create").
    await page.getByRole("button",{name : "create"}).click();//ByRole(button),ByLabel(input),ByText(element)
    await expect(page.getByText("create study")).toBeVisible();
})
