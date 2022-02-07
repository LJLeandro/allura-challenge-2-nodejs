const Sequilize = require('sequelize');
const instancia = require('../../database')

const opcoes = {
    freezeTableName: true,
    tableName: 'despesas',
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
    },
    categoria: {
        type: Sequilize.STRING,
        allowNull: false
    }
}

module.exports = instancia.define('despesas', colunas, opcoes)
