const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.sendFile('./index.html'); 
});

app.all('/answer', (req, res) => {
    res.json(req.query); 
});

module.exports = app;