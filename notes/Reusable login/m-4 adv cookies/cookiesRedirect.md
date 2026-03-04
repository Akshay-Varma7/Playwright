cookies are just-auth state,session id,....
once if loggedin correctly server sends cookie,with every request we send that cookie

ex: redirected to login 
Expected behavior:/home → redirect → /login
(But if cookies from a previous test exist:)server thinks user already logged in
/home → stays on /home


test.use({ storageState: { cookies: [], origins: [] } });


Each test should behave like:
New user opens browser
→ visits site
→ expected behavior happens

NOT like: falky
User already logged in
User visited before
User has stored data


isolated test-so we reset them localStorage-cookie(playwright already )