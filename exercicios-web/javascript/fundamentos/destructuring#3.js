function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const num =  {
    min: 8,
    max: 10
}

console.log(rand(num))
console.log(rand({ min: 955 }))
console.log(rand({}))
// console.log(rand()) ***ERRO***