const http = require('http');

const hostname = 'tu_direccion_ip_elastica'; // Reemplaza esto con tu dirección IP elástica
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo!\n');
});

server.listen(port, hostname, () => {
  console.log(`La Aplicación está funcionando en http://${hostname}:${port}/`);
});
