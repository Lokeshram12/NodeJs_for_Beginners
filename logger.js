const EventEmitter = require('events');

console.log(__dirname);
console.log(__filename);

var url = "http://myLogger.io/log"

class Logger extends EventEmitter{
    greetings(message){
    console.log(message);
    this.emit('messageLogged',{ id :1});
    }
}
module.exports =Logger;
