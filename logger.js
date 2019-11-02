 const EventEmitter = require('events');
 const uuid = require('uuid');


 class Logger extends EventEmitter{
     log(msg){
         // call event
         this.emit('message', { id:uuid.v4(), msg});
     }
 }

// module.exports = Logger; 


const logger = new Logger();
logger.on('message', (data) => {
    console.log('called listener', data);
})


logger.log('Privet Mir');
logger.log('Hello world');