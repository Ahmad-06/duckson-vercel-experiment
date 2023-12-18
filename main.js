const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./index.html'); 
});

app.all('/answer', (req, res) => {
    res.json(req.query); 
});

module.exports = app;