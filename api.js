const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.send('meow')

    // Handle incoming messages
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);

        // Send a response message
        socket.send(`You sent: ${message}`);
    });

    // Handle disconnection
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
