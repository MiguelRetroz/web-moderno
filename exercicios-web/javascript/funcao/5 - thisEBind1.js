const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar// Quando feito isto está em outro constexto não mais o de "pessoa"
falar()// Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)// Funções possuem outras funções
falarDePessoa()