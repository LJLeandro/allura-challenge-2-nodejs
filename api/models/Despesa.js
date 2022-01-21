const despesaRepository = require('../../database/repository/despesasrepository');

class Despesa {
    constructor({id, descricao, valor, data}) {
        this.id = id,
        this.descricao = descricao,
        this.valor = valor,
        this.data =data
    }

    async criar() {
        const resultado = await despesaRepository.criarDespesa({
            descricao: this.descricao,
            valor: this.valor,
            data: this.data
        });

        this.id = resultado.id;
    }
}

module.exports = Despesa