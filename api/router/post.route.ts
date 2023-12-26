import * as http from 'node:http';

export default function postHandler(
  req: http.IncomingMessage,
  res: http.ServerResponse,
) {
  switch (req.method) {
    case 'GET': {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const jsonString = JSON.stringify({
        title: 'New Post',
        id: 1,
        description: 'New post description',
      });
      res.end(jsonString);
      break;
    }
    case 'OPTIONS': {
      res.statusCode = 200;
      res.end();
      break;
    }
    case 'POST': {
      const jsonString = JSON.stringify('Added new Post');
      res.end(jsonString);
      break;
    }
  }
}
