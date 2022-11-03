const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
// const { dirname } = require('path');

const app = express();
// Express exprts a function by default

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
// Multiple static folders can be added until the desired on is added 

// Registers a middleware that parses the requests sent.
// app.get fires only for get requests, post() for post requests
// there's also delete(), patch() and put()

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
// use allows to add a new middleware function
// Accepts an array of request handlers
// Middleware: Add functions hooked into a funnel through which the request goes.

app.listen(9000);

// module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename);