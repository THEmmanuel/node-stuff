const express = require('express')
const bodyParser = require('body-parser')

const app = express();
// Express exprts a function by default

app.use(bodyParser.urlencoded({
	extended: false
}));
// Registers a middleware that parses the requests sent.

app.use('/add-product', (req, res, next) => {
	console.log('in another middleware')
	res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"/><button type = "submit"> Add product<button/></form>'); 
})

app.get('/product', (req, res, next) => {
	console.log(req.body)
	res.redirect('/');
})
// app.get fires only for get requests, post() for post requests
// there's also delete(), patch() and put()

app.use('/', (req, res, next) => {
	console.log('in another middleware')
	res.send('<h1>Hello from express</h1>');
})
// use allows to add a new middleware function
// Accepts an array of request handlers
// Middleware: Add functions hooked into a funnel through which the request goes.

app.listen(9000);