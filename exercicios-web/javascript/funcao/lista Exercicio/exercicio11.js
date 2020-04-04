function bisexto(ano) {
    if (ano % 4 == 0 && ano % 100 != 0) {
        return true
    }
    else if (ano % 400 == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(bisexto(2016))
console.log(bisexto(400))
console.log(bisexto(2015))
console.log(bisexto(2020))