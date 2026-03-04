these abstractions -not repeat ourselves in the code(&directly use them)
fail at- not repeating themselves in the text execution 

DRAWBACK:
say we have 100 tests(even though our function is abstracted in its own file) ,we're still doing the login sequence(fill email,pswd ; confirm ; redirect page) for those 100 tests
as [in between tests/specs playwright(test framework) will wipeout cookies,local storage of the browser(good-for tests to be isolated)]-but that also means we need to somehow login in every test

SOLUTION:
take a sanpshot of browser of the cookies/local storage -hence just login once and reuse that loggedin data for all aour hundered tests