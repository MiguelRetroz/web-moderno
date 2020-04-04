function testeTriangulo(a, b, c) {
    let tipoTriangulo
    if (a == b && a == c) {
        tipoTriangulo = 'Equilátero'
    }
    else if ((a == b && a !== c) || (b == c && b != a) || (c == a && c != b)) {
        tipoTriangulo = 'Isósceles'
    }
    else {
        tipoTriangulo = 'Escaleno'
    }
    return tipoTriangulo
}

console.log(testeTriangulo(2, 2, 2))
console.log(testeTriangulo(2, 2, 3))
console.log(testeTriangulo(2, 3, 2))
console.log(testeTriangulo(3, 2, 2))
console.log(testeTriangulo(1, 2, 3))