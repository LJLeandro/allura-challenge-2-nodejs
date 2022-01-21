const receita = require('../models/receita')

module.exports = {
    listarTodasAsReceitas() {
        return receita.findAll();
    }
}