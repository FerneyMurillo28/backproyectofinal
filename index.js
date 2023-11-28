const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3000;

const cors = require("cors");
server.use(cors());
server.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

server.use(middlewares);
server.use(router);
server.listen(port);
