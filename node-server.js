const http = require('http');

console.log('Node server starting on 8080');

let app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

app.listen(8080);

console.log('Node server running on 8080');
