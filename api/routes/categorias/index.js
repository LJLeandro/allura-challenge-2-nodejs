const roteador = require('express').Router()
const categoriarepository = require('../../../database/repository/categoria-repository')
const Categoria = require('../../models/Categoria')

roteador.get('/categorias', async (req, res) => {
    const resultado = await categoriarepository.listarTodasAsCategorias()

    res.send(JSON.stringify(resultado))
});

roteador.post('/categorias', async (req, res) => {
    try {
        const dadosRecebidos = req.body;
        const categoria = new Categoria(dadosRecebidos);
        await categoria.validar();
        await categoria.criar();

        res.send(JSON.stringify(categoria));
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        }));
    }

    
});

roteador.get('/categoria/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const categoria = await categoriarepository.obterCategoriaPorId(id);
        console.log(categoria);

        res.send(JSON.stringify(categoria));
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

roteador.put('/categoria/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, { id: id });
        const categoriaAtualizada = new Categoria(dados);

        await categoriaAtualizada.atualizar();

        res.send(JSON.stringify({
            mensagem: 'Categoria atualizada.'
        }))
    } catch (error) {
        res.send(JSON.stringify({
            mensagem: error.message
        }))
    }
})

roteador.delete('/categoria/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const categoria = new Categoria({ id: id });
        await categoriarepository.obterCategoriaPorId(id);
        await categoria.remover();

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