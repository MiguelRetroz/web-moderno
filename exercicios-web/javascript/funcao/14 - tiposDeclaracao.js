console.log(soma(3, 1))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 1))

// named function expression
const mult = function mult (x, y) {// Vantagem em caso de Debug a função aparecerá nomeada
    return x * y
}