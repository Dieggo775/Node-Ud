// server.js
import {  createServer } from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Olá, Node!');

});

server.listen(3000, () => console.log('http://localhost:3000'));