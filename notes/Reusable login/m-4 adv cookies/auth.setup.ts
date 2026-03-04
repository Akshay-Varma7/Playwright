//new test//not spec & test--setup & setup
import {test,epect} from "@playwright/test";

//not test file ,setup file
setup("user authentication",async ()= >{
    await page.goto("/");
    await expect(page.getByText("cookie-consent-message")).toBeVisible();

    await page.getByRole("button",{ name : "Accept"}).click();
    await expect(page.getByText("Cookie Preference Saved")).toBeVisible();

    await page.context().storageState({path : "playwright/.auth.json"});
})