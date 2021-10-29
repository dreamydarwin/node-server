const http = require('http');

console.log('Node server starting on 8080');

http.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(8080);

console.log('Node server running on 8080');
