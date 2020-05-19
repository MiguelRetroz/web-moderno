const fabricantes = ["Mercedez", "Audi", "BMW"]

const imprimir = function (nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir)// A função imprimir é chamada de volta a cada loop

fabricantes.forEach(fabricante => console.log(fabricante))