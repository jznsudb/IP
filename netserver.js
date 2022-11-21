var net = require('net')

const server = net.createServer()

server.listen({
    host: 'localhost',
    port: 8080
})

server.on('connection', (client)=> {
    console.log("Client Connected");
    client.write("Welcome to Application")
})