let num1 = 1
let num2 = 2

//Pós-fixada
num1++
console.log(num1)

//Pré-fixada(Prioridade maior)
--num1
console.log(num1)

console.log(++num1 === num2--)

num1 = 1
num2 = 2

// Pós-fixado é executado depois da comparação
console.log(num2-- === ++num1)
