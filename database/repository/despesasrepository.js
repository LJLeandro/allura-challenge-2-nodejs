const despesa = require('../models/despesa')

module.exports = {
    listarTodasAsDespesas() {
        return despesa.findAll();
    }
}