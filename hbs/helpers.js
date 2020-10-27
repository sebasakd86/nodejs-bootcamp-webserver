const hbs = require('hbs');


//helper se dispara cuando se requiere, si no existe la 2da variable al hacer render, se pregunta aca
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})
hbs.registerHelper('capitalize', (texto) => {
    let pal = texto.split(' ')
    pal.forEach( (p, ix) => {
        pal[ix] = p.charAt(0).toUpperCase() + p.substring(1)
    })
    return pal.join(' ')
})