import { expect, test } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
//AxeBuilder constructor quickly initialize by calling - new AxeBuilder({page}) 
test("this page is accessible",async ({ page },testInfo)) => {//msg-if fail tells which functionality broke
    await page.goto("https://playwright.dev/")
    // const results = await new AxeBuilder({page}).analyze();
    // console.log(results);//json info-(obj) or (arr of obj)//meta info about the checks that have been run 
    //we are only intrested in violations array
    //.analyze() is an async function

    // await test.step("check a11y",async ()=>{//all accessibility checks
    //     const { violations } = await new AxeBuilder({page}).analyze();//imp===deconstruct keys from obj//so not only from exported
    //     expect(violations).toHaveLength(0);//assertion-if fails visible on screen and violations-is an array of obj
    // })

    await test.step("check a11y",async ()=>{
        const { violations } = await new AxeBuilder({page})
          .withTags(["wcag2a","wcag2aa"])//wcag specifications
          .withRules(/*[]*/)//custom rules from lighthouse
          .analyze();//imp===deconstruct keys from obj//so not only from exported
        expect(violations).toHaveLength(0);//assertion-if fails visible on screen and violations-is an array of obj

        ///to attach these violations in playwright test report 
        //in attachments down(has stdout file)
        await testInfo.attach("accessibility-scan-results",{
            body: JSON.stringify(violations,null,2),//make a string//value,replacer,space
            contentType: "application/json"
        })
    })
    // to make the low level axe-core page evaluators  calls more readable-wrap the above 2 lines in test.step() 
}
//unlike google-lightHouse(open-source)(uses same dquni that uses axe)reports less errors than "axe-core" for same website
//because its not running all the available accessible tests in axe-core
//only runs (wcag2a and wcag2aa)2 accesibility specifications + many more custom accessibility checks available in axe

//to make accessibility errors(json logs of recieved array) more readable and accessible -modify testInfo(obj)

//again nowthat we are using same tests as of lighthouse howcome lighthouse gets say 1 where here we get 3
//as in lighthouse/core/config/default-config.js "empty heading","label-content-name-mismatch" are hidden"

/////////////////////////////////////////////////////////////////////
can now be added to cicd 