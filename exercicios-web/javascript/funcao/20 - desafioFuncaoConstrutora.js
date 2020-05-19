function Pessoa(nome) {// Semelhante a classe

    this.nome = nome // Se não salvar assim não seria possivel altera-lá depois
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()