const Sequilize = require('sequelize');
const instancia = require('../../database');

const opcoes = {
    freezeTableName: true,
    tableName: 'categorias',
    timestamps: false
}

const colunas = {
    descricao: {
        type: Sequilize.STRING,
        allowNull: false
    }
}

module.exports = instancia.define('categorias', colunas, opcoes)
