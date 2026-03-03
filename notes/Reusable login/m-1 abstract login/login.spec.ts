import {test,expect} from "@playwright/test";
import {login} from "./login.ts";

test("/login",async ({page})=>{
    await login(page);//imp to pass as it expects-not auto,atleast pass
    await expect(page.getByText("Welcome! filip")).toBeVisible();
})