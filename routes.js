const fs = require('fs');

//  The file content in a node module has been cached by node and cant be edited externally

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method

	if (url === '/') {
		res.write('<html>')
		res.write('<head><title> Enter message </title></head>')
		res.write('<body><form action="/message" method="POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>')
		//  A get request is sent when a link is clicked or you enter a URL
		// A POST request is senty by a user triggered action
		res.write('</html>')
		return res.end()
	}

	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk)
			body.push(chunk)
		});
		// On allows listen to events on request
		// The data event is fired when there's a new chunk to be read

		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[0]
			fs.writeFile('message.txt', message, (err) => {
				res.statusCode = 302;
				res.setHeader('Location', '/')
				return res.end();
			})
			//  This differs from the writeFile with the sync standing for synchronous
			//  The execution of the next line of code is blocked until the line of code is done running
			// For a huge file, if the code execution is blocked synchronously, it blocks all requests to the server which isnt what we want
			// WriteFile allows running async
			// WriteFileSync runs synchronously
			// Node implicitly registers a server for us
			// Write file also accepts a call back function that should be executed when the process is done.
		})
		// The end event is fired once the incoming data has been parsed
		// Node adds a new event listener internally to be triggered once the request is done being passed
		// The lines above are asynchronous, not executed immediately
		// It's just a callback to be called at some point in the future
		// Wait for the event loop, never block the event loop
	}

	res.setHeader('Content-Type', 'text/html')
	res.write('<html>')
	res.write('<head><title> Node page </title></head>')
	res.write('<body><h1> Hello hows it going? </h1></body>')
	res.write('</html>')
	res.end()
}

module.exports = requestHandler;

// module.exports = {
// 	handler : requestHandler
// }