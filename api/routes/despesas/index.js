const roteador = require('express').Router()
const despesaRepo = require('../../../database/repository/despesasrepository')
const Despesa = require('../../models/Despesa')

roteador.get('/despesas', async (req, resp) => {
    const resultado = await despesaRepo.listarTodasAsDespesas()

    resp.send(JSON.stringify(resultado))
});

roteador.post('/despesas', async (req, resp) => {
    const dadosRecebidos = req.body
    const despesa = new Despesa(dadosRecebidos)
    await despesa.criar()

    resp.send(JSON.stringify(despesa))
});

module.exports = roteador;