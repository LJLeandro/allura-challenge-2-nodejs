const tabelaDespesa = require('../models/tabelaDespesa')

module.exports = {
    listarTodasAsDespesas() {
        return tabelaDespesa.findAll();
    },

    criarDespesa(despesa) {
        return tabelaDespesa.create(despesa);
    }
}