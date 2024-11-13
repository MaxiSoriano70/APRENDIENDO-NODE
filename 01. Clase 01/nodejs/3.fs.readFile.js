const fs = require('node:fs');

console.log("Leyendo el 1er archivo...");
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { //Callback
    console.log("1er Texto: ", text);
});

console.log("Hacer cositas mientas leo el archivo...");

console.log("Leyendo el 2do archivo...");
fs.readFile('./archivo2.txt', 'utf-8', (err, segundoText) => { //Callback
    console.log("2do Texto: ",segundoText);
});