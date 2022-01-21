const receitaRepository = require('../../database/repository/receitasrepository');

class Receita {
    constructor({id, descricao, valor, data}) {
        this.id = id,
        this.descricao = descricao,
        this.valor = valor,
        this.data =data
    }

    async criar() {
        const resultado = await receitaRepository.criarReceita({
            descricao: this.descricao,
            valor: this.valor,
            data: this.data
        });

        this.id = resultado.id;
    }
}

module.exports = Receita