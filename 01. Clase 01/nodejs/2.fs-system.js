const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(), //Es un archivo
    stats.isDirectory(), // Es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size // Tamaño en bytes
);