const express = require('express');
const app = express();
const http = require('http');
const WebSocket = require('ws');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 8080;

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('message: ' + message);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        let parse = JSON.parse(message);
        let stringify = JSON.stringify(parse);
        client.send(stringify);
      }
    });
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, () => console.log(`Server running on ${port}`));
