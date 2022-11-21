var http = require("http");
http.createServer((request, response)=> {
  response.end('Hii, I am Ayush');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');