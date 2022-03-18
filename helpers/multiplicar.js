const fs = require('fs');
const colors = require('colors')
//se puede hacer una promesa de 2 formas. esta es una y abajo esta la otra
/* const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log(`=============Tabla del ${base}=============`)

        let salida = ''
        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`, salida)
        resolve(`tabla-${base}.txt`)
    })
} */
//esta es la segunda forma. le pongo un async y se convierte en promesa
const crearArchivo = async (base = 5, listar = false, hasta= 10) => {
    try {
        let salida = ''
        let consola = ''
        for (let i = 0; i <= hasta; i++) {
            consola += `${base} x ${i} = ${colors.green.underline(base * i)}\n`
            salida += `${base} x ${i} = ${base * i}\n`
        }
        if(listar){
            console.log(colors.green(`=============Tabla del ${base}=============`))
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (err) {
        throw 'error: ' + err
    }
}
//asi se exporta en node.
module.exports = {
    crearArchivo
}