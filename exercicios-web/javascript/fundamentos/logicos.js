function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor(ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2 // É possível simular o xor(^) utilizando diferente(!)
    const manterSaudavel = !comprarSorvete // operador unário

    /* Utilizando um objeto para fazer o return da função,
    pois em JS só é possível retornar apenas um resultado */
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // Isso é o mesmo que { comprarSorvete: comprarSorvete....}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


// Operador xor(exclusive or) -> (^)Acento Circunflexo
console.log(false ^ false)
console.log(true ^ false)
// É necessário utilizar um macete para tranformar o resultado em booleano
console.log(!!(true ^ false))
