const http = require('http');

// const rqListener = (req, res) => {
// }

const server = http.createServer((req, res) => {
	console.log(req)
	process.exit()
});

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