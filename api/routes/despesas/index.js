const roteador = require('express').Router()
const despesasrepository = require('../../../database/repository/despesasrepository');
const despesaRepo = require('../../../database/repository/despesasrepository')
const Despesa = require('../../models/Despesa')

roteador.get('/despesas', async (req, res) => {
    const resultado = await despesaRepo.listarTodasAsDespesas()

    res.send(JSON.stringify(resultado))
});

roteador.post('/despesas', async (req, res) => {
    try {
        const dadosRecebidos = req.body;
        const despesa = new Despesa(dadosRecebidos);
        await despesa.validar();
        await despesa.criar();

        res.send(JSON.stringify(despesa));
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        }));
    }

    
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

roteador.delete('/despesa/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const despesa = new Despesa({ id: id });
        await despesasrepository.obterDespesaPorId(id);
        await despesa.remover();

        res.send(JSON.stringify({
            mensagem: 'ID removido com sucesso'
        }))
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        }))
    }
});

module.exports = roteador;