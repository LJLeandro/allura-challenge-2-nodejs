const roteador = require('express').Router()
const receitaRepository = require('../../../database/repository/receitas-repository')
const Receita = require('../../models/Receita')
const valiacaoToken = require('../../token')

roteador.get('/receitas', valiacaoToken.validandoJWT, async (req, res) => {
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

roteador.get('/receita/:id', valiacaoToken.validandoJWT, async (req, res) => {
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

roteador.get('/receitas/:ano/:mes', valiacaoToken.validandoJWT, async (req, res) => {
    try {
        const mes = req.params.mes;
        const ano = req.params.ano;
        
        let receitas = await receitaRepository.obterReceitasPorMesAno(mes, ano);
        console.log(receitas);

        res.send(JSON.stringify(receitas));
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

roteador.post('/receitas', valiacaoToken.validandoJWT, async (req, res) => {
    try {
        const dadosRecebidos = req.body
        const novaReceita = new Receita(dadosRecebidos);
        await novaReceita.validar();
        await novaReceita.criar();

        res.json(novaReceita);
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        })).status(500)
    }
    
});

roteador.put('/receitas/:id', valiacaoToken.validandoJWT, async (req, res) => {
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

roteador.delete('/receita/:id',  valiacaoToken.validandoJWT,async (req, res) => {
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