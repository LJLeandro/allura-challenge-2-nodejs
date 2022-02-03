const entidadeDespesa = require('./models/tabelaDespesa');
const entidadeReceita = require('./models/tabelaReceita');
const entidadeCategoria = require('./models/tabelaCategoria');

entidadeReceita.sync().then(() => console.log("Tabela Receitas com sucesso."))

entidadeCategoria.hasMany(entidadeDespesa, {
    foreignKey: 'categoriaId'
});
entidadeCategoria.sync().then(() => {
    console.log("Tabela Categorias com sucesso.")
});

// entidadeDespesa.hasOne(entidadeCategoria, {
//     foreignKey: 'categoriaId'
// });
entidadeDespesa.sync().then(() => console.log("Tabela Despesas com sucesso."))

