const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv').config();

const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath));

process.on('SIGINT', () => console.error('Servidor Tropezado y se rompio la clavicula. En estos momentos está internado en el hospital italiano.'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'/views/home.html')));

app.get('/register.html', (req, res) => res.sendFile(path.join(__dirname,'/views/register.html')));

app.get('/login.html', (req, res) => res.sendFile(path.join(__dirname,'views/login.html')))


app.listen(process.env.PORT, () => console.log(`Servidor Levantado en el puerto ${process.env.PORT} http://localhost:3000`));