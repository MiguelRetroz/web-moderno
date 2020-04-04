const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:// É possível fazer desta forma pois não se coloca nada e nem o break ele executa o case em questão e o debaixo
        case 9: // Se faz isso quando case proximos terão os mesmo blocos de códigos
        // O intervalo tem  de ser entre numeros próximos, não pode ser por exemplo entre 5 e 10
            console.log('Quadro de Honra')
            break //Se não for utilizado o break o switch executa o primeiro case e todos os outros que estiverem embaixo
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperção')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')            
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
