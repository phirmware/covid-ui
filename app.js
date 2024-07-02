const express = require('express');
const app = express();
const logger = require('pino-http');
const covidFacts = require('covid-facts');

app.use(logger());
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
