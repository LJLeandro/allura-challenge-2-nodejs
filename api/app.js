const express = require('express');
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.json());

const roteadorReceita = require('./routes/receitas');
const roteadorDespesa = require('./routes/despesas');
const roteadorResumo = require('./routes/resumo');
const roteadorLogin = require('./routes/login');

app.use('/api/orcamento', roteadorReceita);
app.use('/api/orcamento', roteadorDespesa);
app.use('/api/orcamento', roteadorResumo);
app.use('/api/orcamento', roteadorLogin);

module.exports = app