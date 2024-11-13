const fs = require('node:fs/promises');
//SOLO EN MUDOLOS NATIVOS QUE NO TIENE PROMESAS NATIVAS
/*const { promisify } = require('node:util');
const readFilePromise = promisify(fs.readFile);*/

console.log("Leyendo el 1er archivo...");
fs.readFile('./archivo.txt', 'utf-8')
.then(text => {
    console.log("Primer Texto => ", text)
});
console.log("Hacer cositas mientas leo el archivo...");

console.log("Leyendo el 2do archivo...");
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {
    console.log("Segundo Texto => ", text)
});