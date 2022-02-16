const loginRepository = require('../../database/repository/login-repository');

class Login {
    constructor({ id, login, senha }) {
        this.id = id;
        this.login = login;
        this.senha = senha;
    }

    async criar() {
        loginRepository.criarUsuario(this);
    }

    async validarAcesso() {
        let usuario = await loginRepository.obterLogin(this.login);

        if (usuario.senha == this.senha) {
            return true;
        }

        return false;
    }
}

module.exports = Login;