//state that we're using express
const express = require('express');
//require morgan
const morgan = require('morgan');

//set up hostname variable as localhost, and port
const hostname = 'localhost';
const port = 3000;

//express() function will return an express server application that is available to us under the variable name app
const app = express();

//insert morgan middleware instead of using callback middleware function
app.use(morgan('dev'));

//set up express to serve files from the public folder with the help of express.static can accomplish in a single line
//single line is all we need to have express serve static files from the public folder
app.use(express.static(__dirname + '/public'));

//set up server
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//start server and start listening to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});