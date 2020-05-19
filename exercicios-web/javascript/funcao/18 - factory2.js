function criarProduto(nome, preco) {
    return {
        nome, // Não necessário passar por exemplo: nome:...
        preco,
        desconto: 10
    }
}

const tv = criarProduto('TV', 900)
console.log(tv)

const notebook = criarProduto('Notebook', 2199,49)
console.log(notebook)

console.log(criarProduto('iPad', 1199,99))