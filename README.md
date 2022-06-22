# node-express

# part 1:
install Express and set up a basic server

# part 2: 
use Express to serve static files from the public folder, set up Morgan logging middleware

# notes
express is not a core module but since it's been installed to node_modules, we don't need to give a file path when using:
const express = require('express');

express() function will return an express server application 

set up the server so that it returns the same response with any request, using the use method: ex. app.use()
use method can take a callback function which is a special type of function that express calls a middleware function 

middleware function in express has access to 3 parameters: req(request object), res(response object), next(function)