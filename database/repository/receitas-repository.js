const tabelaReceita = require('../models/tabelaReceita')
const Op = require('sequelize').Op;

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

    async obterReceitasPorDescricao(descricao) {
        const encontrados = await tabelaReceita.findAll({
            where: {
                descricao: {
                    [Op.like]: `%${descricao}%`
                }
            }
        });

        if (!encontrados) {
            throw new Error("Despesas não encontrada.");
        }

        return encontrados;
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