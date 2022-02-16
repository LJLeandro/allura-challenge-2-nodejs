const entidadeDespesa = require('./models/tabelaDespesa');
const entidadeReceita = require('./models/tabelaReceita');
const entidadeUsuario = require('./models/tabelaUsuario');

entidadeReceita.sync().then(() => console.log("Tabela Receitas com sucesso."))

entidadeDespesa.sync().then(() => console.log("Tabela Despesas com sucesso."))

entidadeUsuario.sync().then(() => console.log("Tabela Usuarios com sucesso."))