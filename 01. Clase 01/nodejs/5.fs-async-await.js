const { readFile } = require('node:fs/promises');

async function init(params) {
    console.log("Leyendo el 1er archivo...");

    const text = await readFile('./archivo.txt', 'utf-8')
    console.log("Primer Texto => ", text);

    console.log("Hacer cositas mientas leo el archivo...");

    console.log("Leyendo el 2do archivo...");
    const secondText = await readFile('./archivo2.txt', 'utf-8');
    console.log("Segundo Texto => ", secondText);
}
init();

//IIFE
/*(
    async()=>{
        console.log("Leyendo el 1er archivo...");

        const text = await readFile('./archivo.txt', 'utf-8')
        console.log("Primer Texto => ", text);

        console.log("Hacer cositas mientas leo el archivo...");

        console.log("Leyendo el 2do archivo...");
        const secondText = await readFile('./archivo2.txt', 'utf-8');
        console.log("Segundo Texto => ", secondText);
    }
)();*/


