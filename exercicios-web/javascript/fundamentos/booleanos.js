let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/* No exemplo abaixo é utilizado o operador de negação
para resolver o valor inteiro da variavel isAtivo em booleano */
isAtivo = 1
//Negação dupla para que não tenha interferência
console.log(!!isAtivo)

console.log('Os verdadeiros...')
// Todos os número resulta true menos 0
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!+Infinity)
console.log(!!-Infinity)
console.log(!!(isAtivo = 3))

console.log("Os falso...")
console.log(!!0)
console.log(!!-0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = -0))

console.log(`Pra finalizar...`)
console.log(!!('' || null || 0 || 1))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Maria'
console.log(nome || 'Desconhecido')