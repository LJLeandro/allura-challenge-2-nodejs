const request = require("supertest");
const app = require('../api/app');

describe('Testando os Endpoints do Resumo', () => {
    it('A Consulta do Resumo deve acontecer com sucesso.', async () => {
        const res = await request(app).get('/api/orcamento/resumo/2022/1');

        expect(200).toEqual(res.statusCode);
    });
});