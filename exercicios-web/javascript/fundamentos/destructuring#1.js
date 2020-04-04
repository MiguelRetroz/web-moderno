//********Recurso introduzido no ES2015(ES6)********

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome)
console.log(idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada  = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

const { endereco } = pessoa
console.log(endereco)

// const { conta: { ag, num }} = pessoa
// console.log(ag, num) ***Erro***