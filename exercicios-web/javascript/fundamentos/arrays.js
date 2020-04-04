const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
valores[10] = 1
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')// Não recomendado misturar dados de diferentes tipos
console.log(valores)

console.log(valores.pop())// .pop Retira o ultimo valor do array
console.log(valores)
// Delete funciona no contexto de objeto, para retirar um valor de um objeto.
delete valores[0]
console.log(valores)

console.log(typeof valores)