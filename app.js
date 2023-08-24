const express = require('express');
const app = express();
const covidFacts = require('covid-facts');
app.use(express.static(__dirname, + '/views'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/random', (req, res) => {
    res.json({
        message: 'successsss',
        statusCode: 200,
        fact: covidFacts.random()
    });
});


app.listen(3000, () => console.log('Listening at port 3000'));
