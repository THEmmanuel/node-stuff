const express = require('express')

const app = express();
// Express exprts a function by default

app.use('/', (req, res, next) => {
	console.log('this always runs')
})

app.use('/add-product', (req, res, next) => {
	console.log('in another middleware')
	res.send('<h1>Add product</h1>'); 
})

app.use('/', (req, res, next) => {
	console.log('in another middleware')
	res.send('<h1>Hello from express</h1>');
})
// use allows to add a new middleware function
// Accepts an array of request handlers
// Middleware: Add functions hooked into a funnel through which the request goes.

app.listen(9000);