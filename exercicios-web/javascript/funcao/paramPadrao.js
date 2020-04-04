// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) { // Não funciona com números que resulta em valor falso como zero
    a = a || 1
    b = b || 1
    c = c || 1 // Esta estratégia ainda é muito utilizada pois não funciona só com parâmetros como a ultima estratégia
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// Estratégia 2, 3, e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // O número antes do in é o índice do parâmetros(Neste caso b o segundo)
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma1(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
