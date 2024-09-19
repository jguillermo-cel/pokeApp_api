const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = jsonServer.cors();

const PORT = 3004| 3002;

server.use('/api/', router);
server.use(middlewares);
server.use(cors);

server.listen(port, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});