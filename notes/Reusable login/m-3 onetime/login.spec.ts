import {test,epect} from "@playwright/test"

test("login",async ({page})=>{
    await this.page.goto("/login");
    await this.page.getByLabel("email").fill("test@gmail.com");
    await this.page.getByLabel("password").fill("test1234");
    await this.page.getByRole("button",{name : "login"}).click();
    await expect(this.page.getByText("welcome !")).toBeVisible();

    //we store storageStates(of browser data) into a file-auth.json
    //context() , - storageState()
    await page.context().storageState({ path : 'playwright/.auth.json'})
})