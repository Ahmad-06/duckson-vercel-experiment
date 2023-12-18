const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.all('/answer', (req, res) => {
    res.json(req.query); 
});

app.listen(process.env.PORT);