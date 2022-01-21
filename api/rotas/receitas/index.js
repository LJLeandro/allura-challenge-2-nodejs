const roteadorReceitas = require('express').Router()
const receitas = require('../../../database/repository/receitasrepository')

roteadorReceitas.use('/receitas', async (req, resp) => {
    const resultado = await receitas.listarTodasAsReceitas()

    resp.send(JSON.stringify(resultado))
});

module.exports = roteadorReceitas;