const modeloDespesa = require('./models/tabelaDespesa')
const modeloReceita = require('./models/tabelaReceita')

modeloDespesa.sync().then(() => console.log("Tabela Criada com sucesso."))
modeloReceita.sync().then(() => console.log("Tabela Criada com sucesso."))