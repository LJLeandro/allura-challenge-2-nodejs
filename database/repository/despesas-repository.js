const tabelaDespesa = require('../models/tabelaDespesa')
const Op = require('sequelize').Op;

module.exports = {
    listarTodasAsDespesas() {
        return tabelaDespesa.findAll();
    },

    criarDespesa(despesa) {
        return tabelaDespesa.create(despesa);
    },

    async obterDesespesasPorMesAno(mes, ano) {
        let mesInicio = mes;
        let mesCorte = parseInt(mes) + 1;

        if (mesCorte > 12) {
            mesCorte = 1;
        }

        let data = new Date(`${ano}-${mesInicio}-1 00:00:00`);
        let dataCorte = new Date(`${ano}-${mesCorte}-1 00:00:00`);

        const encontrados = await tabelaDespesa.findAll({
            where: {
                data: {
                    [Op.between]: [data, dataCorte]
                }
            }
        });

        if (!encontrados) {
            throw new Error(`Despesas não encontradas para o mês ${mes}/${ano}.`);
        }

        return encontrados;
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