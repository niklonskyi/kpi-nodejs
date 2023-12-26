// import * as http from 'node:http';
import postHandler from './post.route';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handleRequest (
  req: VercelRequest,
  res: VercelResponse
) {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome to main page');
      break;
    case '/post':
      postHandler(req, res);
  }
}
