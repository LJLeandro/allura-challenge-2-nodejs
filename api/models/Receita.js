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

    async atualizar() {
        await receitaRepository.obterReceitaPorId(this.id);
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

        await receitaRepository.alterarReceita(this.id, dadosParaAtualizar);
    }
}

module.exports = Receita