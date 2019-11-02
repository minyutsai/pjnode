const http = require('http');

// create server object
http.createServer((req, res) => {
    // write response
    res.write('hello world, mir!');
    res.end();
}).listen(5000, () => {
    console.log('server running...')
});