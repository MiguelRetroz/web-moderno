// Par Nome/Valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = "Falaa" //contexto léxico 2
    return saudacao
}

console.log(saudacao + ' ' + exec())

// Objs são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(cliente)