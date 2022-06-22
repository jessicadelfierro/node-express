# node-express

# part 1:
install Express and set up a basic server

# part 2: 
use Express to serve static files from the public folder, set up Morgan logging middleware

# part 3:
set up REST API endpoints using Express routing methods

# part 4:
create an Express router module

# notes
express is not a core module but since it's been installed to node_modules, we don't need to give a file path when using:
const express = require('express');

express() function will return an express server application 

set up the server so that it returns the same response with any request, using the use method: ex. app.use()
use method can take a callback function which is a special type of function that express calls a middleware function 

middleware function in express has access to 3 parameters: req(request object), res(response object), next(function)

morgan('dev') configures morgan to log using the development version which will print some additional information to the screen

__dirname variable is a special variable in node, whenever used, it will refer to the absolute path of the current directory of the file that it is in

app.use(express.json()); -- when the server receives requests with json formatted data in the body, this middleware function will handle parsing that json data into javascript properties of the request object so that we can use that data in javascript

after the express server handles the code inside the callback for the app.all method, once it hits the next function it will go to the next relavent routing method. That means if the request that came in was a POST request, then it would go from the app.all method to the app.post method skipping the app.get method since its not a GET request.