const entidadeDespesa = require('./models/tabelaDespesa');
const entidadeReceita = require('./models/tabelaReceita');

entidadeReceita.sync().then(() => console.log("Tabela Receitas com sucesso."))

entidadeDespesa.sync().then(() => console.log("Tabela Despesas com sucesso."))