//lly waitFor 
//describe-test-step

most test depend on playwright fixtures.
we can also make our custom fixtures.

//
({ page }) specify what objects like page,request we want to use

({ page }) => page is a native playwright fixture
playwright-setups and tear it down when testcase is done
//

better than importing files and using them in test
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
3 REASONS TO USE CUSTOM FIXTURES:
00000000000000 we use the: new user() almost evrytime in tests 
1.Move pom to custom fixtures
//and used in many without having to use: new user() everytime
2.Add config values to playwright test runner//same user static obj in many files///fixture as config
(to change static values/configurational values-of playwright test run )
{options configuration?}
say user
[3 places that you usually configure your playwright test runs]
1(general use:),2(projects use:) in playwright config 
use: //config
user:{
    email: "general@email.com",
    password: "..."
}
3(in spec test.use())
3.use custom fixtures for setup/teardown instructions
//js excetions listening (page.on() & array of errors(obj)) //////in multiple test cases
we cld use beforeAll or beforeEach or use test hooks in spec files itself?

but i just want this functionality to be just happening so that i dont have to worry about ----in base file----this architecture own fixture+ overwrite the ones coming from playwright(using the one coming+ adding a functionality check)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
for this .spec file to overwrite user config static obj:
 use- test.use({//this is exactly how we control all the playwright configuration options
    user:{
        email: "specific@email.com",
        password: "..."
    }
 })

||||||||||||||||||||||||||||||||||||||||||||||||\\\\\

hence fixtures give tests everything they need and nothing else