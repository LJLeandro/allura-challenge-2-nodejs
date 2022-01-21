const Sequilize = require('sequelize');
const instancia = require('../../database')

const opcoes = {
    freezeTableName: true,
    tableName: 'receitas',
    timestamps: false
}

const colunas = {
    descricao: {
        type: Sequilize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequilize.DOUBLE,
        allowNull: false
    },
    data: {
        type: Sequilize.DATE,
        allowNull: false
    }
}

module.exports = instancia.define('receitas', colunas, opcoes)
