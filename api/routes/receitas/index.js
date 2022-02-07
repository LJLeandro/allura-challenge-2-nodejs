const roteador = require('express').Router()
const receitaRepository = require('../../../database/repository/receitas-repository')
const Receita = require('../../models/Receita')

roteador.get('/despesas', async (req, res) => {
    try {
        const descricao = req.query.descricao;
           
        if (descricao == null) {
            res.send(JSON.stringify(await receitaRepository.listarTodasAsReceitas()));
        } else {
            res.send(JSON.stringify(await receitaRepository.obterReceitasPorDescricao(descricao)));
        }
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

roteador.post('/receitas', async (req, res) => {
    try {
        const dadosRecebidos = req.body
        const novaReceita = new Receita(dadosRecebidos);
        await novaReceita.validar();
        await novaReceita.criar();

        res.send(JSON.stringify(novaReceita))
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        }))
    }
    
});

roteador.get('/receita/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let receita = await receitaRepository.obterReceitaPorId(id);
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

roteador.delete('/receita/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const receita = new Receita({ id: id });
        
        await receitaRepository.obterReceitaPorId(id);
        await receita.remover();

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