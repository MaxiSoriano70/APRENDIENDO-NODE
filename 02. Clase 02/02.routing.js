const http = require('node:http');

const desiredPort = process.env.PORT ?? 3000;

//COMMONJS --> MODULOS CLÁSICOS DE NODE
const buizelJson = require('./pokemon/buizel.json');

const processRequest = (req, res) =>{
    const { method, url } = req;

    switch(method){
        case 'GET':
            switch(url){
                case '/pokemon/buizel':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                    return res.end(JSON.stringify(buizelJson));
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end("<h1>404</h1>");
            }
        case 'POST':
            switch(url){
                case '/pokemon':{
                    const body = '';
                    break;
                }
                case '/otro':{
                    const body = '';
                    break;
                }
            }
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
})