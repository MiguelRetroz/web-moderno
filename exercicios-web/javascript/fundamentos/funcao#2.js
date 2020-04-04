// Armazenando uma Função em uma variável ou constante
const imprimiSoma = function (a, b) { // Função anônima
    console.log(a + b)
}

console.log("Soma")
imprimiSoma(2, 4) // Hoisting

const soma = function soma(a, b=1) {
    return a + b
}

console.log("Soma#2")
console.log(soma(2, 2))

// Armazenando um Função Arrow(Seta, Flecha)
const divicao = (a, b) => {
    return a / b
}

console.log("Divição")
console.log(divicao(4, 2))

// Retorno implícito
const subtracao = (a, b) => a - b /*Este tipo só pode ser utilizado quando se tem apenas uma linha de código.
*Se houver apenas um parâmetro não é necessário os parêntese*/

console.log("Subtração")
console.log(subtracao(5, 3))

const imprimi2 = a => console.log(a)
imprimi2("Legal!!!")