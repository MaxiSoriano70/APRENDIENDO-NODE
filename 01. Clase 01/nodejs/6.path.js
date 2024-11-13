const path = require('node:path');

//Barra separadora de carpetas segun SO
console.log(path.sep);

//Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.text');
console.log(filePath);

/*Nombre del fichero con su extension*/
const base =  path.basename('maxi/asroma/password.txt');
console.log(base);

/*Nombre del fichero sin su extension*/
const fileName =  path.basename('maxi/asroma/password.txt', '.txt');
console.log(fileName);

/*Extension del fichero*/
const extension = path.extname('my.super.image.jpg');
console.log(extension);