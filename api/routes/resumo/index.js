const roteador = require('express').Router()
const receitaRepository = require('../../../database/repository/receitas-repository')
const despesaRepository = require('../../../database/repository/despesas-repository')
const valiacaoToken = require('../../token')

roteador.get('/resumo/:ano/:mes', valiacaoToken.validandoJWT, async (req, res) => {
    try {
        const mes = req.params.mes;
        const ano = req.params.ano;
        
        let receita = {
            valorTotalGasto: await despesaRepository.obterValorTotalGastoNoMes(mes, ano),
            valorTotalRecebido: await receitaRepository.obterValorTotalRecebidoNoMes(mes, ano),
            saldoFinal: 0,
            valorGastoPorCategoria: await despesaRepository.obterTotaldeDespesasAgrupadasPorCategoriaNoMes(mes, ano)
        }

        receita.saldoFinal = parseFloat(receita.valorTotalRecebido - receita.valorTotalGasto).toFixed(2);

        res.send(receita);
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

module.exports = roteador;
