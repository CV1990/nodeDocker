const http = require('http');

const server = http.createServer((req, res) => {
  // Verificamos que el path sea exactamente la raíz "/"
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify({ mensaje: "Home" }));
  }

  if (req.url === '/status') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify({ status: 200, mensaje: "Ok" }));
  } else {
    // Para cualquier otra ruta (ej: /usuarios) devolvemos 404
    res.writeHead(404);
    res.end('Ruta no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});