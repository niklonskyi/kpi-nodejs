"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as http from 'node:http';
function postHandler(req, res) {
    switch (req.method) {
        case 'GET': {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            var obj = {
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
            var jsonString = { message: 'Added new post' };
            res.json(jsonString);
            break;
        }
    }
}
exports.default = postHandler;
