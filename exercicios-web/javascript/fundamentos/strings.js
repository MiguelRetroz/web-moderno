const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log("Cod3r".charAt(0))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('o'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))


// Literal é um dado que não é armazenado, utilizado diretamento no código fonte
console.log('Escola '.concat(escola).concat("!")) // Neste caso 'Escola ' e "!" são literais
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))
console.log(escola)

console.log('Ana, Maria, Pedro'.split(','))