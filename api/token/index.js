const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = {
    validandoJWT(req, res, next) {
        const token = req.header['x-access-token']
        jwt.verify(token, config.get('api.secret'), (err, decoded) => {
            if (err) return res.status(401).send({ mensagem: 'Acesso negado'});
    
            req.userId = decoded.userId;
            next();
        });
    }
} 

