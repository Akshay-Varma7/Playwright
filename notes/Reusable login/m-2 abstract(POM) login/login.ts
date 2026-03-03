//we abstract(own + modular from eport) every page into its own model(class)

//NOT GOOD-SELECTERS not abstracted
export class Login{
    constructor(private page:page){}

    async login(){
        await this.page.goto("/login");
        await this.page.getByLabel("email").fill("test@gmail.com");
        await this.page.getByLabel("password").fill("test1234");
        await this.page.getByRole("button",{name : "login"}).click();
        await expect(this.page.getByText("welcome !")).toBeVisible();
    }
}