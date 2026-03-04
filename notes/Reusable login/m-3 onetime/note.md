we store storageStates into a file-auth.json
to store:
await page.context().storageState({ path : 'playwright/.auth.json'})

to use in multiple tests:
test.use({ storageState : /*path*/ 'playwright/.auth.json'});-take that file and put it in our browser

this file has sensitive data:
.gitignore - playwright/.auth.json//example api keys

SAME PRINCIPLE-used by frontend apps facebook even after you restart your pc