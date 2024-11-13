/*const fs = require('node:fs');

fs.readdir('.', (err, files) => {
    if(err){
        console.error('Error al leer el directorio: ', err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    });
});*/

/* CON PROMISES */
const fs = require('node:fs/promises');

/* Para saber si el fichero existe o no */
//fs.stat('content');

fs.readdir('.')
    .then(files =>{
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        if(err){
            console.error('Error al leer el directorio: ', err);
        return;
        }
    });