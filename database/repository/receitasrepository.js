const tabelaReceita = require('../models/tabelaReceita')

module.exports = {
    listarTodasAsReceitas() {
        return receita.findAll();
    },

    criarReceita(receita) {
        return tabelaReceita.create(receita);
    }
}