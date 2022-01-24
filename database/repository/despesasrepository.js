const tabelaDespesa = require('../models/tabelaDespesa')

module.exports = {
    listarTodasAsDespesas() {
        return tabelaDespesa.findAll();
    },

    criarDespesa(despesa) {
        return tabelaDespesa.create(despesa);
    },

    async obterDespesaPorId(id) {
        const encontrado = await tabelaDespesa.findOne({
            where: {
                id: id
            }
        });

        if (!encontrado) {
            throw new Error("Despesa não encontrada.");
        }

        return encontrado;
    },

    alterarDespesa(id, despesa) {
        return tabelaDespesa.update(despesa,
            {
                where: { id: id }
            });
    },

    removerDespesa(id) {
        return tabelaDespesa.destroy({
            where: {
                id: id
            }
        })
    }
}