console.log(typeof console)

console.log(Math.floor(6.1))
console.log(Math.ceil(6.1))

// Criando membros dinamicamente
const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2' // Mais flexivel(Mas não recomendado)

console.log(obj1.nome)
console.log(obj1['nome'])

/* Utilizando o this é possivel criar membros,
que serão expostos fora da função.
*/
function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2)
console.log(obj3.nome)