// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externar à função

// Contexto Léxico em ação!
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() { // A função carrega consigo o escopo em que foi criada
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)