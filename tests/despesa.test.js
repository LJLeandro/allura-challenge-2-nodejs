const request = require("supertest");
const app = require('../api/app');

describe('Testando os Endpoints de Despesa', () => {
    it('A Listagem de Despesas deve acontecer com sucesso.', async () => {
        const res = await request(app).get('/api/orcamento/despesas');

        expect(200).toEqual(res.statusCode);
    });

    it('Obter Despesa por Id com sucesso.', async () => {
        const res = await request(app).get('/api/orcamento/despesa/1');

        expect(200).toEqual(res.statusCode);
    });

    it('Obter Despesa por Mês e Ano com sucesso.', async () => {
        const res = await request(app).get('/api/orcamento/despesas/2022/1');

        expect(200).toEqual(res.statusCode);
    });

    it('Cadastrar Despesa com sucesso.', async() => {
        const res = await request(app).post('/api/orcamento/despesas').send({
            "descricao": "IPVA",
            "valor": 800,
            "data": "2022/01/20"
        })

        console.log(`Recebido ${res}`);
        expect(200).toEqual(res.statusCode);
    });

    it('Alterar Despesa com sucesso.', async() => {
        const res = await request(app).put('/api/orcamento/despesa/1').send({
            "descricao": "IPVA",
            "valor": 800,
            "data": "2022/01/20"
        })

        console.log(`Recebido ${res}`);
        expect(200).toEqual(res.statusCode);
    });

    it('Remover Despesa com sucesso.', async() => {
        const res = await request(app).get('/api/orcamento/despesa/1');

        expect(200).toEqual(res.statusCode);
    });
});