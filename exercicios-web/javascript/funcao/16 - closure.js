// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas á função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {// Função tem consciência do local onde foi declarada
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())