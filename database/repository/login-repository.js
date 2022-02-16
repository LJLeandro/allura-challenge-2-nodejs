const sequelize = require('sequelize');
const tabelaUsuario = require('../models/tabelaUsuario')

module.exports = {
    async obterLogin(login) {
        const usuario = await tabelaUsuario.findOne({
            where: {
                login: login
            }
        });

        if (!usuario) {
            throw new Error("Usuario não encontrado.");
        }

        return usuario;
    },

    async criarUsuario(usuario) {
        return tabelaUsuario.create(usuario);
    }
}