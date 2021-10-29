const http = require('http');

const port = 8080;

console.log(`Node server starting on ${port}`);

let app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

app.listen(port);

console.log(`Node server running on ${port}`);
