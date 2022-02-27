const http = require('http');
const io = require('socket.io');

const app = require('./app');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));