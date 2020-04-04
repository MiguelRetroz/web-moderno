let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // Função Arrow sempre será anônima
    return 2 * a
}

// Não é necessário o uso dos parênteses, quando há apenas um parâmetro
dobro = a => {
    return 2 * a
}

// return implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param
console.log(ola())// O param está sendo ignorado