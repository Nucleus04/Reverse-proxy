let { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");

const app = express();

const backendTarget = 'https://164.92.95.149:5000'; 
console.log("starting the proxy server...");
const proxy = createProxyMiddleware({
    target: backendTarget,
    changeOrigin: true,
    secure: false,
})

app.use('/', proxy);

app.listen(80);