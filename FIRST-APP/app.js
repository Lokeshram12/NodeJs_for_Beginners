function sayHello(name){
    console.log('hello '+ name);
}
sayHello("ram");

//Modules : os,fs,events,http

/* global Objects :
    console.log() === window.console.log()
    setTimeout(),setInterval()
    clearTimeout(),clearInterval()
    global
*/

console.log(module);

const log=require('./logger');

//log("hiiii") //can import single function or object

const path = require('path');

var pathObj = path.parse(__filename)

console.log(pathObj);

const os = require('os')

let totalMemory = os.totalmem();

console.log(totalMemory);
//Template string(String literal)
console.log(`Total Memory: ${totalMemory}`);

const fs = require('fs');
const { error } = require('console');

const files = fs.readdirSync('./')
console.log(files); //synchronous

fs.readdir('./',function(err,files){
    if (err) console.log("Error: ",err);
    else console.log("result: ",files);
});  //asynchronous


const EventEmitter = require('events');

const logger = new log()
//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('Listener called by event',arg);  
});
logger.greetings("Event is calling the listener")

//Raise an event
//emitter.emit('messageLogged')
//emitter.emit('messageLogged',{ id :1});// event arguments
// Making a noise

// HTTP MODULE

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
    }
    else if(req.url =='/name'){
        res.write('My name is lokesh');
    }
    res.end();
});
server.on('connection' , (socket)=>{
    console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');
