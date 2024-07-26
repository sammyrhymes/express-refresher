const express = require('express');

const app = express();

// app.get

app.get('/', (req, res) => {
    res.send('homepage')
})

app.get('/about', (req, res) => {
    res.send('about')
})

// app.all (404)

app.get('*', (req, res) => {
    res.status(404).send('<h1> Resource not found </h1>')
})

app.listen(8000, () => {
    console.log('server running on http://127.0.0.1:8000');
});