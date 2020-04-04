const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional o OO

const falarDePessoa = pessoa.falar.bind(pessoa)/* Amarra o objeto ao this,
                                                  não importa como a função for chamada,
                                                  o this sempre apontará para o objeto em "bind"*/
falarDePessoa()