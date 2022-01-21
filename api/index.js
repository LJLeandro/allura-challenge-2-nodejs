const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const config = require('config');

app.use(bodyparser.json())

const roteadorReceita = require('./rotas/receitas')
const roteadorDespesa = require('./rotas/despesas')

app.use('/api/orcamento', roteadorReceita);
app.use('/api/orcamento', roteadorDespesa);

app.listen(config.get('api.porta'), () => console.log('A API está funcionado'));