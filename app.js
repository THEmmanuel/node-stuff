const http = require('http');
const routes = require('./routes');

// const rqListener = (req, res) => {
// }

const server = http.createServer(routes);
	// console.log(req.url, req.method, req.headers)
	//This logs the request object to the console
	//contains headers
	// host the request was sent to
	// cache, browser, accepted response type
	// cookies
	// http version etc
	// process.exit()

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

	//.end is the end of the data added to the response
	// .write allows adding some data tp the respinse
	// There is a set of supported headers for responses

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

// How node works behind the scenes
// Node uses a single thread... a thread is a single operating system process
// How is node able to handle multiple requests if we use one thread?
// Files take longe because they are big and take longer for the request to complete

// The event loop starts when the program starts
// Handles event callbacks
// The event loop only handdles callbacks with events that run quickly
// Sends to worker pool --- different threads!
// The worker on another thread handles the process... multithreading
// sicne the event loop is responsible for the events, this is reflected in the event loop
// Node will execute the appropriate callback

// The event loop
// The event loop is run or start by node js that keeps the process running and handles all the callbacks
// The loop keeps on looping
// Checks if theres any timer callbacks at the start of an iteration
// Checks other callbacks... finished opeartions with callbacks etc
//Other pending callbacks... execute i/o related callbacks that were defined
// The pull phase... node js looks for neww io eveents
// Node js executes all close event callbacks
// exit the program if there is no process running

// client => request => server => response => client... how the web works
// Node js runs async/non blocking js code and uses abd event driven code (event loop) to run logic
// A node program exits as soon as there isnt more work to do
// The create server event never finishes executing by default

// Asynchronous code
// Js code is non blocking
// Node uses callbacks and events... direct changes

// Requests and responses
// Parse request data in chunks
// Streams and buffer
// No double responses

// Node has some core modules
// Nod ejs ships with smultiple core modules... http, fs, path etc
// Core modules can be imported to any file to be used there
// Import via require(module)

// Node module system
// Import with require(./path-to-file) for custom modules
// require('module') for core and third party modules
// Export with module.exports (for multipkle exports)