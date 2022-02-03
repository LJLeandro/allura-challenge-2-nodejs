const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const config = require('config');

app.use(bodyparser.json())

const roteadorReceita = require('./routes/receitas')
const roteadorDespesa = require('./routes/despesas')
const roteadorCategoria = require('./routes/categorias')

app.use('/api/orcamento', roteadorReceita);
app.use('/api/orcamento', roteadorDespesa);
app.use('/api/orcamento', roteadorCategoria);

app.listen(config.get('api.porta'), () => console.log('A API está funcionado'));