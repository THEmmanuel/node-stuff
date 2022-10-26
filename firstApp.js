const http = require('http');

// const rqListener = (req, res) => {
// }

const server = http.createServer((req, res) => {
	console.log(req)
});

server.listen(3000);

// Anoymous function... event driven node architecture

// A request listener is a function that executes for every incoming request to the server

// Create server returns a server