const express = require('express');
const logger = require('pino-http');
const morgan = require('morgan');
const covidFacts = require('covid-facts');
const url = require('url');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// app.use(logger());
app.use(morgan('dev'));

app.use(express.static(__dirname, + '/views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/random', (req, res) => {
    const fact = covidFacts.random()
    res.json({
        message: 'success',
        statusCode: 200,
        fact,
    });
});

app.use('/proxy', (req, res, next) => {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).send('No URL provided');
    }

    // Parse the target URL
    const parsedUrl = url.parse(targetUrl);

    // Create a proxy middleware to forward the request
    const proxy = createProxyMiddleware({
        target: `${parsedUrl.protocol}//${parsedUrl.host}`,
        changeOrigin: true,
        pathRewrite: {
            '^/proxy': parsedUrl.pathname + (parsedUrl.search || ''),
        },
        secure: false,
        onProxyReq: (proxyReq, req, res) => {
            // Modify the proxy request headers if needed
        },
        onProxyRes: (proxyRes, req, res) => {
            // Modify the proxy response headers if needed
        },
    });

    return proxy(req, res, next);
});

app.listen(process.env.PORT, () => console.log(`Listening at port ${process.env.PORT} ${process.env.MESSAGE}`));
