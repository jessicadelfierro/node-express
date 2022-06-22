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
app.use(express.json());

//support for rest api endpoints; any http requests to this path will trigger this method
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //pass control of the application routing to the next relevant routing method after this one, otherwise it will just stop here
});
//set up endpoint for GET request
app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});
//set up endpoint for POST request
app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});
//set up endpoint for PUT request
app.put('/campsites', (req, res) => {
    res.statusCode = 403; //operation is not supported
    res.end('PUT operation is not supported on /campsites');
});
//set up endpoint for DELETE request
app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

//route parameter -- allow us to store whatever the client sends as the part of the path after the slash as a route parameter named campsiteId
app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});
app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`); 
});
app.put('/campsites/:campsiteId', (req, res) => {
    //write to the body
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name} 
        with description: ${req.body.description}`);
});
app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

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