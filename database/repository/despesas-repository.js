const tabelaDespesa = require('../models/tabelaDespesa')
const Op = require('sequelize').Op;

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

    async obterDespesaPorDescricao(descricao) {
        const encontrados = await tabelaDespesa.findAll({
            where: {
                descricao: {
                    [Op.like]: `%${descricao}%`
                }
            }
        });

        if (!encontrados) {
            throw new Error("Despesa não encontrada.");
        }

        return encontrados;
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