const roteador = require('express').Router()
const Login = require('../../models/login')
const config = require('config');
const jwt = require('jsonwebtoken');
const SECRET = config.get('api.secret')

roteador.post('/login', async (req, res) => {
    try {
        let usr = new Login({ id : 0, 
            login : req.body.login, 
            senha : req.body.senha });
            
        let acessoValido = await usr.validarAcesso();

        if (acessoValido) {
            const token = jwt.sign({ userId:1 }, SECRET, { expiresIn: 300 })

            return res.json({ autenticacao: true, token })
        }
           
        return res.status(401).send({ mensagem: 'Login e Senha incorretos.'});
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

roteador.post('/novo-login', async (req, res) => {
    try {
        let novoUsuario = new Login({ id : 0, 
            login : req.body.login, 
            senha : req.body.senha });
            
        novoUsuario.criar()
           
        return res.status(201).send({ mensagem: `Usuario Criado com Login.`});
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

module.exports = roteador;