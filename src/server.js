const express = require('express');
const cors = require('cors');

const usuariosTemporales = require('./routes/usuariosTemporales');
const usuariosPermanentes = require('./routes/usuariosPermanentes');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(express.json());

app.use('/usuarios/permanentes', usuariosPermanentes);
app.use('/usuarios/temporales', usuariosTemporales);

module.exports = app;
