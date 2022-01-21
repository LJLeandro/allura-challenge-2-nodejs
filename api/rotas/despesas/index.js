const roteador = require('express').Router()
const despesa = require('../../../database/repository/despesasrepository')

roteador.use('/despesas', async (req, resp) => {
    const resultado = await despesa.listarTodasAsDespesas()

    resp.send(JSON.stringify(resultado))
});

module.exports = roteador;