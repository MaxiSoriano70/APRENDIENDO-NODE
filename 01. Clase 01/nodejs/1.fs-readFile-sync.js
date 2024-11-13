const fs = require('node:fs');

console.log("Leyendo el 1er archivo...");
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    if (err) {
        console.error("Error leyendo el 1er archivo:", err);
        return;
    }
    console.log("1er Texto:", text);
    console.log("Leyendo el 2do archivo...");
    fs.readFile('./archivo2.txt', 'utf-8', (err, segundoText) => {
        if (err) {
            console.error("Error leyendo el 2do archivo:", err);
            return;
        }
        console.log("2do Texto:", segundoText);
    });
});

console.log("Hacer cositas mientras leo los archivos...");