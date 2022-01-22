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

    async atualizar() {
        await despesaRepository.obterDespesaPorId(this.id);
        const campos = ['descricao', 'valor', 'data'];
        const dadosParaAtualizar = [];
        
        campos.forEach((campo) => {
            const valor = this[campo];
            
            if (typeof valor === 'string' && valor.length > 0){
                dadosParaAtualizar[campo] = valor;
            }
        });

        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new Error('Não foram fornecidas dados para atualizar!');
        }

        await despesaRepository.alterarDespesa(this.id, dadosParaAtualizar);
    }
}

module.exports = Despesa