const roteador = require('express').Router()
const receitas = require('../../../database/repository/receitasrepository')
const Receita = require('../../models/Receita')

roteador.get('/receitas', async (req, resp) => {
    const resultado = await receitas.listarTodasAsReceitas()

    resp.send(JSON.stringify(resultado))
});

roteador.post('/receitas', async (req, resp) => {
    const dadosRecebidos = req.body
    const receita = new Receita(dadosRecebidos)
    await receita.criar()

    resp.send(JSON.stringify(receita))
});

module.exports = roteador;