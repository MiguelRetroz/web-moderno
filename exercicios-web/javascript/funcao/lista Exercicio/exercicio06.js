function simples(capital, juros, tempo) {
    juros = juros / 100
    valorJurosMes = capital * juros
    valorFinal = capital + (valorJurosMes * tempo)
    return valorFinal
}

console.log('****Juros Simples****')
console.log(`R$: ${simples(500, 3, 8)}`)

function composto(capital, juros, tempo) {
    juros = juros / 100
    valorFinal = capital
    
    for(let i = 0; i < tempo; i++) {
        valorJuros = valorFinal * juros
        valorFinal += valorJuros
    }
    return valorFinal
}

console.log('****Juros Composto****')
console.log(`R$: ${composto(1000, 20, 4)}`)