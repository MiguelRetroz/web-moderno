console.log(soma(3, 2))
// console.log(sub(2, 3)) Erro, pois este tipo de declaração de função é carregado na execução do código

// function declaration
function soma(x, y) { // Funções iguais a esta são carregadas antes do código ser executado
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(4, 2))

// named function expression
const mult = function mult(x, y) {// A diferença no named é que a função terá nome no caso de um debug
    return x * y
}
console.log(mult(2, 3))