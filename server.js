//state that we're using express
const express = require('express');
//require morgan
const morgan = require('morgan');
//require campsiteRouter
const campsiteRouter = require('./routes/campsiteRouter');

//set up hostname variable as localhost, and port
const hostname = 'localhost';
const port = 3000;

//express() function will return an express server application that is available to us under the variable name app
const app = express();
//insert morgan middleware instead of using callback middleware function
app.use(morgan('dev'));
app.use(express.json());

//provide root path for campsiteRouter, that's why we don't need to specify in campsiteRouter.js
app.use('/campsites', campsiteRouter);

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



/*
DELETED --

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

*/