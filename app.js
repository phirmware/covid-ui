const express = require('express');
const app = express();
const covidFacts = require('covid-facts');
app.use(express.static(__dirname, + '/views'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/random', (req, res) => {
    const fact = covidFacts.random()
    console.log('random fact endpoint triggered, fact: ', fact)
    res.json({
        message: 'success',
        statusCode: 200,
        fact,
    });
});


app.listen(3000, () => console.log('Listening at port 3000'));
