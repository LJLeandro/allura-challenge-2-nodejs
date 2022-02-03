const categoriaRepository = require('../../database/repository/categoria-repository');

class Categoria {
    constructor({id, descricao}) {
        this.id = id,
        this.descricao = descricao
    }

    async criar() {
        const resultado = await categoriaRepository.criarCategoria({
            descricao: this.descricao
        });

        this.id = resultado.id;
    }

    async atualizar() {
        await categoriaRepository.obterCategoriaPorId(this.id);
        const campos = ['descricao'];
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

        await categoriaRepository.alterarCategoria(this.id, dadosParaAtualizar);
    }

    async validar() {
        const campos = ['descricao']

        campos.forEach(campo => {
            const valor = this[campo];

            if (typeof valor !== 'string' || valor.length === 0) {
                throw new Error(`O campo '${campo}' está inválido`)  
            }
        });
    }

    async remover() {
        return categoriaRepository.removerCategoria(this.id);
    }
}

module.exports = Categoria