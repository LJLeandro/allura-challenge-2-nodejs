const despesaRepository = require('../../database/repository/despesas-repository');

class Despesa {
    constructor({id, descricao, valor, data, categoria}) {
        this.id = id,
        this.descricao = descricao,
        this.valor = valor,
        this.data = data,
        this.categoriaId = categoriaId
    }

    async criar() {
        const resultado = await despesaRepository.criarDespesa({
            descricao: this.descricao,
            valor: this.valor,
            data: this.data,
            categoriaId: this.categoriaId
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

    async validar() {
        if (this.categoriaId == null) {
            this.categoriaId 
        }

        const campos = ['descricao', 'valor', 'data']

        campos.forEach(campo => {
            const valor = this[campo];

            if (typeof valor !== 'string' || valor.length === 0) {
                throw new Error(`O campo '${campo}' está inválido`)  
            }
        });
    }

    async remover() {
        return despesaRepository.removerDespesa(this.id);
    }
}

module.exports = Despesa