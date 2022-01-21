const Sequilize = require('sequelize');
const instancia = require('../../database')

const opcoes = {
    freezeTableName: true,
    tableName: 'despesas',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

const colunas = {
    id: {
        type: Sequilize.STRING,
        allowNull: false,
        primaryKey: true
    },
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

module.exports = instancia.define('despesas', colunas, opcoes)
