const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: process.env.WS_PORT });
wss.on("connection", (socket) => {
  console.log("New connection");

  socket.onmessage = (msg) => {
    sendInfoConfgModule(msg.data);
  };

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

exports.configurationDriver = (config) => {
  console.log("config", config);
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(config));
  });
};

const sendInfoConfgModule = (config) => {
  // wss.clients.forEach(function each(client) {
  //   client.send(
  //     JSON.stringify({
  //       key: "toConfig",
  //       data: config,
  //     })
  //   );
  // });
};