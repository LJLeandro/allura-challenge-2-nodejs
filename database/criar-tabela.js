const modeloDespesa = require('./models/despesa')
const modeloReceita = require('./models/receita')

modeloDespesa.sync().then(() => console.log("Tabela Criada com sucesso."))
modeloReceita.sync().then(() => console.log("Tabela Criada com sucesso."))