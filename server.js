const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000

//middleware == callback que se ejecuta siempre
app.use( express.static( `${__dirname}/public`))

//Express HBS
hbs.registerPartials(`${__dirname}/views/parciales`, function (err) {});
app.set('view engine', '.hbs');

 
app.get('/', function (req, res) {
    res.render('home');
})
app.get('/data', function (req, res) {
    res.send('La data')
})
app.get('/about', function (req, res) {
    res.render('about');
}) 
app.listen(port, () => {
    console.log(`Escuchando en :${port}`)
})