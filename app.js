const express = require('express');
const app = express();
const covidFacts = require('covid-facts');
app.set('view engine', 'ejs');
app.use(express.static('views'));


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/random', (req, res) => {
    res.json({
        message: 'success',
        statusCode: 200,
        fact: covidFacts.random()
    });
});


app.listen(3000, () => console.log('Listening at port 3000'));