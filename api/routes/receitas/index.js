const roteador = require('express').Router()
const receitaRepo = require('../../../database/repository/receitasrepository')
const Receita = require('../../models/Receita')

roteador.get('/receitas', async (req, res) => {
    const resultado = await receitaRepo.listarTodasAsReceitas()

    res.send(JSON.stringify(resultado))
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
        let receita = await receitaRepo.obterReceitaPorId(id);
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
        
        await receitaRepo.obterReceitaPorId(id);
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