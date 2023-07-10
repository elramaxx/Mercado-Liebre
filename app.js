const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));

process.on('SIGINT', () => console.error('Servidor Tropezado y se rompio la clavicula. En estos momentos está internado en el hospital italiano.'))

app.get('/', (req, res) => res.sendFile(path.join(publicPath, '/views/home.html')));

app.get('/register.html', (req, res) => res.sendFile(path.join(publicPath, '/views/register.html')));

app.get('/login.html', (req, res) => res.sendFile(path.join(publicPath, 'views/login.html')))


const server = app.listen(3000, () => console.log('Servidor Levantado en el puerto 3000 http://localhost:3000'));