class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() { // Esta função não é closure, podendo variar conforme sua chamada
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1)

const criarPessoa = nome => {
    return {
        nome,
        falar() { // Esta função é closure
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p2 = criarPessoa('João')
console.log(p2)
p2.falar()