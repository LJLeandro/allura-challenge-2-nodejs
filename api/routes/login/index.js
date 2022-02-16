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

        if (usr.validarAcesso()) {
            const token = jwt.sign({ userId:1 }, SECRET, { expiresIn: 300 })

            return res.json({ autenticacao: true, token })
        }
           
        return res.status(401).end();
    } catch(erro){
        res.send(JSON.stringify({
            mensagem: erro.message
        }));
    }
});

module.exports = roteador;