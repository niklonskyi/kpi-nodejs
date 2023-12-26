// import * as http from 'node:http';
export default function postHandler(req, res) {
    switch (req.method) {
        case 'GET': {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            const obj = {
                title: 'New Post',
                id: 1,
                description: 'New post description',
            };
            res.json(obj);
            break;
        }
        case 'OPTIONS': {
            res.statusCode = 200;
            res.end();
            break;
        }
        case 'POST': {
            res.setHeader('Content-Type', 'application/json');
            const jsonString = { message: 'Added new post' };
            res.json(jsonString);
            break;
        }
    }
}
