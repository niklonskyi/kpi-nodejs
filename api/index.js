"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as http from 'node:http';
var router_1 = require("./router/router");
// const hostname = '127.0.0.1';
// const port = 3000;
function default_1(req, res) {
    (0, router_1.default)(req, res);
}
exports.default = default_1;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   handleRequest(req, res);
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// process.on('SIGINT', () => {
//   console.log('Shutting down server...');
//   server.close(() => {
//     console.log('Server closed.');
//     process.exit(0);
//   });
// });
