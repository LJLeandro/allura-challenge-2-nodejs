const roteador = require('express').Router()
const receitaRepo = require('../../../database/repository/receitasrepository')
const Receita = require('../../models/Receita')

roteador.get('/receitas', async (req, resp) => {
    const resultado = await receitaRepo.listarTodasAsReceitas()

    resp.send(JSON.stringify(resultado))
});

roteador.post('/receitas', async (req, resp) => {
    const dadosRecebidos = req.body
    const receita = new Receita(dadosRecebidos)
    await receita.criar()

    resp.send(JSON.stringify(receita))
});

roteador.get('/receita/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const receita = await receitaRepo.obterReceitaPorId(id);
        console.log(receita);

        res.send(JSON.stringify(receita));
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

roteador.put('/receitas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, { id: id });
        const receitaAtualizada = new Receita(dados);

        await receitaAtualizada.atualizar();

        res.send(JSON.stringify({
            mensagem: 'Receita atualizada.'
        }))
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        }))
    }
})

module.exports = roteador;