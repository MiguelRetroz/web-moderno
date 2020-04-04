// Função sem retorno
function imprimiSoma(a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)
imprimiSoma(2) /* O segundo parâmetro, b no caso,
 e definido com undefined e assim resulta Not a Number,
  é possivel tratar isto.*/
imprimiSoma(2, 3, 4, 6, 9) // Ele ignora os outros parâmetros e só pega os dois primeiros


function imprimiSomaTratada(a, b) {
    console.log(a + b || "Erro de parâmetros")
}

imprimiSomaTratada(2)

// Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2))