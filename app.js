// const path = require('path');
// const pathobj = path.parse(__dirname);
// console.log(pathobj);


// const http = require('http'); // Loads the http module
// http.createServer((request, response) => {
//  // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
//  response.writeHead(200, {
//  'Content-Type': 'text/plain'
//  });
//  // 2. Write the announced text to the body of the page
//  response.write('Hello, World!\n');
//  // 3. Tell the server that all of the response headers and body have been sent
//  response.end();
// }).listen(1337); // 4. Tells the server what port to be on
// .listen(process.env.PORT || 3000)


// //working with os
// const os = require('os');
// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

// // working with file system
// const fs = require('fs');
// const files =fs.readdir('./', (err, files) =>{
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// // Events Module (Event: signal that something has happened in our web server)
// // recall that event emitter is a class(container for properties and function)
// const EventEmitter = require('events');
// //instance of the class(objects)
// // const emitter = new EventEmitter(); 
// //register a listener that will be called when the emit is raised
// //on or addListener does the same thing
// // emitter.on('messageLogged', () => console.log('Listener called..'))
// // call the listener first before emitting it
// //emit means signalling something

// // from logger module
// const Logger = require('./logger');
// const logger = new Logger();

// //Raise an event
// // emitter.emit('messageLogged');

// //Events arguments
// //emitter.emit('messageLogged', 1, 'url);
// //or emitter.emit('messageLogged', {id: 1, url:'http://'});
// // then go to the emitter.on to add the argument in the callback function
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });   

// // Extending event emitter
// // raise the event in the logger module
// logger.log('message');

// HTTP MODULE
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end()
    }
});



// this server is an event emitter
server.listen(3000);

console.log('listening on port 3000...');