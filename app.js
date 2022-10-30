const http = require('http');
const express = require('express')

const app = express();
// Express exprts a function by default

app.use((req, res, next) => {
	console.log('in the middleware')
	next()
	// Allows request in another middleware to run
})

app.use((req, res, next) => {
	console.log('in another middleware')
})
// use allows to add a new middleware function
// Accepts an array of request handlers

const server = http.createServer(app);

server.listen(9000);