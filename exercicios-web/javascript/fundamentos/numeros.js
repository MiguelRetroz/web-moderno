const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1)
console.log('Peso 1 é um valor interiro', Number.isInteger(peso1))
console.log(peso2)
console.log('Peso 2 é um valor inteiro', Number.isInteger(peso2))
/*
* Se após o ponto o valor for apenas 0,
* ele considera como inteiro
*/
console.log()

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('Media é um valor interio',Number.isInteger(media))
console.log(media.toFixed(2))
console.log(media.toString(2))// Passando o valor 2 como parâmetro para .toString ele converte o valor numérico em Binario
const mediaBinario = Number(media.toFixed(1)).toString(2)
console.log(mediaBinario)
console.log(typeof media)
// Number maiusculo é uma função e number minusculo é o tipo
console.log(typeof Number)