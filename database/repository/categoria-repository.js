const tabelaCategoria = require('../models/tabelaCategoria')

module.exports = {
    listarTodasAsCategorias() {
        return tabelaCategoria.findAll();
    },

    criarCategoria(categoria) {
        return tabelaCategoria.create(categoria);
    },

    async obterCategoriaPorId(id) {
        const encontrado = await tabelaCategoria.findOne({
            where: {
                id: id
            }
        });

        if (!encontrado) {
            throw new Error("Despesa não encontrada.");
        }

        return encontrado;
    },

    alterarCategoria(id, categoria) {
        return tabelaCategoria.update(categoria,
            {
                where: { id: id }
            });
    },

    removerCategoria(id) {
        return tabelaCategoria.destroy({
            where: {
                id: id
            }
        })
    }
}