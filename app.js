const express = require('express');
const logger = require('pino-http');
const morgan = require('morgan');
const covidFacts = require('covid-facts');
const url = require('url');

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

app.listen(process.env.PORT, () => console.log(`Listening at port ${process.env.PORT} ${process.env.MESSAGE}`));
