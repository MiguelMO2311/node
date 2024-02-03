const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Petición recibida del cliente');
  console.log(`URL: ${req.url}`);
  console.log(`Método: ${req.method}`);
  console.log(`User-Agent: ${req.headers['user-agent']}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ ok: true, message: 'Recibido!' });
});

app.get('/bye', (req, res) => {
  res.status(200).json({ ok: true, message: 'Adios!' });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
