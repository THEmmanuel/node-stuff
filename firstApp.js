const http = require('http');

// const rqListener = (req, res) => {
// }

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers)
	//This logs the request object to the console
	//contains headers
	// host the request was sent to
	// cache, browser, accepted response type
	// cookies
	// http version etc
	// process.exit()
	res.setHeader('Content-Type', 'text/html')
	res.write('<html>')
	res.write('<head><title> Node page </title></head>')
	res.write('<body><h1> Hello hows it going? </h1></body>')
	res.write('</html>')
	res.end()
	//.end is the end of the data added to the response
	// .write allows adding some data tp the respinse
	// There is a set of supported headers for responses
});

//GET is the default method used if just entering a url in the browser

server.listen(9000);

// Anoymous function... event driven node architecture

// A request listener is a function that executes for every incoming request to the server

// Create server returns a server

// Node program lifecycle
// Node file is executed
// Start script
// The event loop is a loop process that keeps on runninhg as long as there is an event listener running

// Node code is managed by this...
// Node executes single threaded javascript

// Behind the scenes node still leverages on the operating system for multithreading

// If you were to unregister, it would end