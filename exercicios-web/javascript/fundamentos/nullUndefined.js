let valor // Não inicializada
console.log(valor)

valor = null
console.log(valor)
// console.log(valor.toString()) Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir Undefined, deixa o uso para a linguagem
console.log(!!produto.preco)
// delete.produto.preco para retirar atributo do objeto
console.log(produto)

