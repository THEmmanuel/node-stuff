const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
// Express exprts a function by default

app.use(bodyParser.urlencoded({
	extended: false
}));
// Registers a middleware that parses the requests sent.
// app.get fires only for get requests, post() for post requests
// there's also delete(), patch() and put()

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).send('<h1> Page not found </h1>')
})
// use allows to add a new middleware function
// Accepts an array of request handlers
// Middleware: Add functions hooked into a funnel through which the request goes.

app.listen(9000);