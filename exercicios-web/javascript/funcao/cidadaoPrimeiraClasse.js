// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() {}// Se não for definido o return a função por padrão retorna undefined

// Armazenar em umm variável
const fun2 = function (a, b) {return a - b}

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2 /*Sem os parêntese as funções não são invocadas*/,fun1(), fun2(4, 2)/*Aqui a função está sem invocada e está sendo salvo no array o seu return*/ ]
console.log(array)
console.log(array[0](3, 2))
console.log(array[2](3, 2))

// Armamzenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun() // Invocando a função
}

run(function () { return console.log('Executando...')})

// Uma função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

const cincoMais = soma(2, 3)
cincoMais(5)