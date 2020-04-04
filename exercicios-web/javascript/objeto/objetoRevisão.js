// Coleção dinâmica de pares chave/valor
const produto = new Object// new Object é uma função construtora
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propritario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 42
    }],
    calculaValorSeguro: function () {
        //....
    }
}


carro.propritario.endereco.numero = 1000
carro['propritario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.propritario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)