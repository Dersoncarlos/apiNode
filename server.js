const express = require('express');
const mongoose = require('mongoose');
const requiredDir = require('require-dir');

// inicia aplicação
const app = express();

// Iniciando o Bd
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requiredDir('./src/models');

// primeira rota
app.use('/api', require('./src/routes'));

app.listen(3111);