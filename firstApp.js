const http = require('http');
const fs = require('fs')

// const rqListener = (req, res) => {
// }

const server = http.createServer((req, res) => {
	// console.log(req.url, req.method, req.headers)
	//This logs the request object to the console
	//contains headers
	// host the request was sent to
	// cache, browser, accepted response type
	// cookies
	// http version etc
	// process.exit()

	const url = req.url;
	const method = req.method;

	// The incoming data is usually sent as a stream of data
	//Streams and buffers
	// A request is an ongoing process... the request is read by node in chunks
	// In multiple parts and done at the end at some point
	// For larger requests, streaming the data works better.
	// The data can be read while it's still coming in as opposed to waiting for the full file before using it.
	// This is how node handles all requests since its unknown how complex and big they are
	// The problem with streaming is that the chunks cant be worked with arbitrarily
	// The chunks are organized using buffers
	// A buffer is like a bus stop
	// A buffer is a construct that allows holding multiple chunks and work with them

	if (url === '/') {
		res.write('<html>')
		res.write('<head><title> Enter message </title></head>')
		res.write('<body><form action="/message" method="POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>')
		//  A get request is sent when a link is clicked or you enter a URL
		// A POST request is senty by a user triggered action
		res.write('</html>')
		return res.end()
	}

	if (url === '/message' && method === 'POST'){
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk)
			body.push(chunk)
		});
		// On allows listen to events on request
		// The data event is fired when there's a new chunk to be read

		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1]
			fs.writeFileSync('message.txt', message)
		})
		// The end event is fired once the incoming data has been parsed
		res.statusCode = 302;
		res.setHeader('Location', '/')
		return res.end();
	}

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