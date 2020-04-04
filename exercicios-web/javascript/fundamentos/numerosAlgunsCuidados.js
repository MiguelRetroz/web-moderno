console.log(7 / 0)
/* Em algumas linguagens isso da erro,
Mas em JS ele verifica se o conteúdo do string é um valor numérico */
console.log("10" / 2)
/* Se o conteúdo dentro das aspas não for numérico
ou não respeitar os formatos numéricos
ele resulta "NaN" -> "Not a Number" */
console.log("A" / 2)
// No contesto de string "+" significa concatenação
console.log('3' + 2)
/* Como "-" não faz sentido para string,
ele transforma o contéudo das aspas em Numbers */
console.log('3' - 2)
/* Gera uma imprecisão,
culpa da implementasaõ IEEE Standard for Binary Floating-Point Arithmetic  */
console.log(0.1 + 0.7)

// console.log(10.toString())
console.log((10.345).toFixed(2))
