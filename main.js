const path = require('path');
const express = require('express');
const njk = require('nunjucks');

const app = express();

njk.configure(path.join(__dirname, 'views'), {
    express: app,
    autoescape: true
});
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index');
});

app.all('/answer', (req, res) => {
    res.json(req.query); 
});

app.listen(process.env.PORT);