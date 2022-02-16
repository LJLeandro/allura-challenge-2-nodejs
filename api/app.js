const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const config = require('config');

app.use(bodyparser.json());

const roteadorReceita = require('./routes/receitas');
const roteadorDespesa = require('./routes/despesas');
const roteadorResumo = require('./routes/resumo');

app.use('/api/orcamento', roteadorReceita);
app.use('/api/orcamento', roteadorDespesa);
app.use('/api/orcamento', roteadorResumo);

module.exports = app