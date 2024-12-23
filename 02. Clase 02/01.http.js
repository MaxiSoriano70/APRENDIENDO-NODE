const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if(req.url === '/'){
        res.statusCode = 200;
        res.end('<h1>Bienvenido a mi página de inicio</h1>');
    }else if(req.url === '/imagen-pingu'){
        const imagePath = path.join(__dirname, 'Pingu.jpg');
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.error('Error leyendo el archivo:', err);
                res.statusCode = 500;
                res.end('<h1>500 Internal Server Error</h1>');
            } else {
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        });
    }
    else if(req.url === '/contacto'){
        res.statusCode = 200;
        res.end('<h1>Contacto</h1>');
    }else{
        res.statusCode = 404;
        res.end('<h1>404</h1>');
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
})