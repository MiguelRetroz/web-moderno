const [a] = [10]
console.log(a)

// É possivel ignorar elementos do arrays
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

const x = [1, 2, 3]
console.log(x)

const [x1, x2, x3] = x
console.log(x1)
console.log(x2)
console.log(x3)