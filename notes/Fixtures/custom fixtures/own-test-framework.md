whatever page we request dashboardPage ,it gets this instance of dashboard( done using use)
use is an async func.

evrything is kind of documented in our base file  

base(imported) file has -test,expect and custom fixture(uses a pom (to initialize)
HENCE EVERYTHING IS DOCUMENTED IN OUR BASE FILE

ex: custom fixture-dashboardPage

what if we need user object in our test cases(do we have to import it here)

user: [obj(with values to pass),obj({option: true})to make the 1st value configurable]-static

Native fictures-page,user,request-used directly after importing {}
custim fixtures-same format to use {,}
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

using playwright architechture-kinda building up ur own testing framework(no random imports)

by using fixture architecture we can levarage all functionalities of test runner already gives us +extend it with own methods,obj(following playwright conventions)