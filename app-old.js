const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'})
    let s = {
        nombre: 'pablooooo',
        edad: 700,
        url: req.url
    }
    res.write(JSON.stringify(s))
    // res.write('Holi mundi')
    res.end()
}).listen(8080)

console.log('Escucando en 8080')