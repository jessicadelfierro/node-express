//state that we're using express
const express = require('express');

//set up hostname variable as localhost, and port
const hostname = 'localhost';
const port = 3000;

//express() function will return an express server application that is available to us under the variable name app
const app = express();

//set up server
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//start server and start listening to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});