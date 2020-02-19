var http = require("http");
fs = require ('fs');
const PORT = process.env.PORT || 8080;
http.createServer(function (request, response){
    //Send the HTTP header
    //HTTP Status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200, {'Content-type': 'text/plain'});

    //Send the respone body as "Hello World"
    response.end('Hello World\n');


}).listen(PORT);

console.log('our app is running on port ${ PORT }');
