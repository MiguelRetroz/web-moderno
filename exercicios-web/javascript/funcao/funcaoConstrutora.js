function Carro (velocidadeMaxima =  200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0 // let define se ele será privado
    // Método público
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocideAtual = velocidadeMaxima
        }
    }
    // Método público
    this.getVelocidaAtual = () => {// This define que ele será público
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidaAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidaAtual())

console.log(typeof Carro)
console.log(typeof ferrari)