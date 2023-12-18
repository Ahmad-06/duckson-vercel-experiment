const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('./index.html'); 
});

app.get('/answer', (req, res) => {
    res.json(req.query); 
});

app.listen(PORT);