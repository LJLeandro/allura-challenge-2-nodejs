const tabelaReceita = require('../models/tabelaReceita')
const Op = require('sequelize').Op;

module.exports = {
    listarTodasAsReceitas() {
        return tabelaReceita.findAll();
    },

    criarReceita(receita) {
        return tabelaReceita.create(receita);
    },

    async obterReceitasPorMesAno(mes, ano) {
        let mesInicio = mes;
        let mesCorte = parseInt(mes) + 1;

        if (mesCorte > 12) {
            mesCorte = 1;
        }

        let data = new Date(`${ano}-${mesInicio}-1 00:00:00`);
        let dataCorte = new Date(`${ano}-${mesCorte}-1 00:00:00`);

        const encontrados = await tabelaReceita.findAll({
            where: {
                data: {
                    [Op.between]: [data, dataCorte]
                }
            }
        });

        if (!encontrados) {
            throw new Error(`Receitas não encontradas para o mês ${mes}/${ano}.`);
        }

        return encontrados;
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