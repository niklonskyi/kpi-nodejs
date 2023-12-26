"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as http from 'node:http';
var post_route_1 = require("./post.route");
function handleRequest(req, res) {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Welcome to main page');
            break;
        case '/post':
            (0, post_route_1.default)(req, res);
    }
}
exports.default = handleRequest;
