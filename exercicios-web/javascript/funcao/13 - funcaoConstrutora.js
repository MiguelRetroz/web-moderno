function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado(let)
    let velocidadeAtual = 0

    // Método publico(this)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // Funções construtoras podem ser entendidas como Classes, moldes para instanciar objetos
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())