// import * as http from 'node:http';
import handleRequest from './router/router';
import { VercelRequest, VercelResponse } from '@vercel/node';

// const hostname = '127.0.0.1';
// const port = 3000;

export default function(req: VercelRequest, res: VercelResponse) {
  handleRequest(req, res);
}

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
