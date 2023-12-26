// import * as http from 'node:http';
import postHandler from './post.route';
export default function handleRequest(req, res) {
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
