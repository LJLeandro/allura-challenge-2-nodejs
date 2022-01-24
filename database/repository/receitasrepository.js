const tabelaReceita = require('../models/tabelaReceita')

module.exports = {
    listarTodasAsReceitas() {
        return tabelaReceita.findAll();
    },

    criarReceita(receita) {
        return tabelaReceita.create(receita);
    },

    async obterReceitaPorId(id) {
        const encontrado = await tabelaReceita.findOne({
            where: {
                id: id
            }
        });

        if (!encontrado) {
            throw new Error("Receita não encontrada.");
        }

        return encontrado;
    },

    alterarReceita(id, receita) {
        return tabelaReceita.update(receita,
            {
                where: { id: id }
            });
    },

    removerReceita(id) {
        return tabelaReceita.destroy({
            where: {
                id: id
            }
        })
    }
}