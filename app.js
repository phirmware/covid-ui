const express = require('express');
const app = express();
const covidFacts = require('covid-facts');
app.use(express.static(__dirname, + '/views'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/random', (req, res) => {
    console.info(req, 'ra')
    const fact = covidFacts.random()
    console.log('fact generated', fact)
    res.json({
        message: 'success',
        statusCode: 200,
        fact,
    });
});

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// Usage:
sleep(5).then(() => {
  console.log('5 seconds have passed');
  throw new Error('Smart move')
});


app.listen(process.env.PORT, () => console.log(`Listening at port ${process.env.PORT}`));
