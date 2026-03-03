import {test,expect} from "@playwright/test";

//in e2e tests
//this test is smtg ,to write in all of our test suite-ABSTRACT login!-in it own module

//therefore a function-abstracted into its own file
test("login",async ({page})=>{//click(),fill(),toBeVisible()
    //shld be awaited-some may auto await, as they all rerturn promises
    await page.goto("/login");//hit the route

    //find ip and fill-ip has labels
    await page.findByLabel("email").fill("test@gmail.com");
    await page.findByLabel("password").fill("test1234");

    //find + click button to submit-given the "button" has name="login"
    await page.getByRole("button",{name : "login"}).click();

    //HERE SAY- new page redirects-expect(which is sure to come(true)-ifnot false) and 
    await expect(page.getByText("welcome")).toBeVisible();//bad as text can change******
    //auto chain awaits.....*****
})
> {} 