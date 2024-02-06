// Import require modules
const express = require('express');
const http = require('http');

const app = express();
const port = 4000;

// app.post('/', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//     console.log('log executed');
// })

// rework this to do the same thing but using express, not http
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(port);

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

