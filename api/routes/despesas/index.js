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

roteador.get('/despesa/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const despesa = await despesaRepo.obterDespesaPorId(id);
        console.log(despesa);

        res.send(JSON.stringify(despesa));
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

roteador.put('/despesa/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, { id: id });
        const despesaAtualizada = new Despesa(dados);

        await despesaAtualizada.atualizar();

        res.send(JSON.stringify({
            mensagem: 'Despesa atualizada.'
        }))
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        }))
    }
})

module.exports = roteador;