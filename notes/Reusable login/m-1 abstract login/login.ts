export const login= async ()=>{
    await page.goto("/login");
    await page.getByLabel("email").fill("test@gmail.com");
    await page.getByLabel("password").fill("test1234");
    await page.getElementByRole("email",{name : "login"}).click();
} 