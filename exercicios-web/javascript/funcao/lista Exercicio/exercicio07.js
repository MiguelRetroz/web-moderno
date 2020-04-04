function bhaskara(a, b, c) {
    delta = Math.pow(b, 2) - (4* a *c)
    
    if (delta >= 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return [x1, x2]
    }
    else {
        return 'Delta é negativo'
    }
}

console.log(bhaskara(1, 12, -13))
console.log(bhaskara(2, 4, 2))
console.log(bhaskara(2, 3, 2))