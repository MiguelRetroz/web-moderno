// Factory simples
function criarPessoa() { // Função Factory é uma função que retorna um objeto
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())