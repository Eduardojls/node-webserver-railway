const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

console.log(process.env.PORT);

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Express
app.use(express.static(__dirname + '/public'));

// Express Routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Curso de Node',
        name: 'Eduardo López'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Curso de Node',
        name: 'Eduardo López'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Curso de Node',
        name: 'Eduardo López'
    });
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/old/404.html');
})

// Port configuration
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 