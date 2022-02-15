const supertest = require("supertest");
const app = require('../api/index');

describe('Testando os Endpoints de Receita', () => {
    it('A Listagem de Receitas deve acontecer com sucesso.', async () => {
        const res = await supertest(app).get('/api/orcamento/receitas');

        expect(200).toEqual(res.statusCode);
    });

    it('Obter Receita por Id com sucesso.', async () => {
        const res = await supertest(app).get('/api/orcamento/receita/1');

        expect(200).toEqual(res.statusCode);
    });

    it('Cadastrar Receita com sucesso.', async() => {
        const res = await supertest(app).post('/api/orcamento/receitas').send({
            "descricao": "Salario Mensal",
            "valor": 3411,
            "data": "2022/01/20"
        })

        console.log(`Recebido ${res}`);
        expect(200).toEqual(res.statusCode);
    });
});