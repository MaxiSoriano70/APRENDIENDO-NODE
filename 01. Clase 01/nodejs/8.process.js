//ARGUMENTOS DE ENTRADA
/*console.log(process.argv);*/

//CONTROLAR EL PROCESO Y SU SALIDA
/*process.exit(1);*/

//CONTROLAR EVENTOS DEL PROCESO
process.on('exit', () => {
    //LIMPIAR RECURSOS
});

//CURRENT WORKING DIRECTORY
console.log(process.cwd());

//PLATFORM
console.log(process.env.PEPITO);