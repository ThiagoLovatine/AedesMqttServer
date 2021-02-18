const aedes = require("aedes")();
const server = require("net").createServer(aedes.handle);
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
const port = 51883;
const wsPort = 51884;


ws.createServer({ server: httpServer }, aedes.handle);

server.listen(port, function () {
  console.log("Servidor rodando via Mqtt mqtt://", port);
});

httpServer.listen(wsPort, function () {
  console.log("Servidor rodando via WebSocket ws:// ", wsPort);
});