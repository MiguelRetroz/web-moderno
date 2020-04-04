console.log('01)', '1' == 1)
// Estritamente igual (compara os valores e os tipos)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)// Compara apenas o valor
console.log('04)', '3' !== 3) // Compara o valor e o tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
/* Nos dois casos acima o resultado é falso pois
a variaveis d1 e d2 então salvando cada um endereço de memoria
diferente um do outro, pois a instancias de Date(ou seja "new Date") é feita em cada*/

console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// O ideal é utilizar o estritamente (===) para evitar misturar tipos