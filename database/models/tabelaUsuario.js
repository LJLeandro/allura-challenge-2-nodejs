const Sequilize = require('sequelize');
const instancia = require('../../database')

const opcoes = {
    freezeTableName: true,
    tableName: 'usuarios',
    timestamps: false
}

const colunas = {
    login: {
        type: Sequilize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequilize.STRING,
        allowNull: false
    }
}

module.exports = instancia.define('receitas', colunas, opcoes)
