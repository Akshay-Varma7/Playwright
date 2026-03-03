import {test,expect} from "@playwright/test";
import {Login} from "./login.ts";

test("login",async ({page})=>{
    let login = new Login(page);
    await login.login();
})