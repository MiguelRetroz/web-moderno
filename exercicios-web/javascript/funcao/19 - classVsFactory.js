class Pessoa {// Classe em JS são funções
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)// Sabe do contexto que foi escritos
    }
}

const p2 = criarPessoa('Marcos')
p2.falar()