// Estratégia 1 para gerar valor padrão
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log('Estratégia 1')
console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0)/*Essa estratégia falha se for utilizar o Zero*/)

// Estratégia 2, 3, 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c// Melhor das três
    return a + b + c
}
console.log('Estratégia 2, 3, 4')
console.log(soma2(), soma2(3), soma(1, 2, 3), soma2(0, 0, 0))

// Valor padrão ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log('Padrão ES2015')
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))