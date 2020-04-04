function desempenho(jogos) {
    let melhorJogo = jogos[0]
    let piorJogo = jogos[0]

    let contMelhor = 0;
    let piorPos = 0;

    for(i in jogos) {
        if (jogos[i] > melhorJogo) {
            contMelhor++
            melhorJogo = jogos[i]
        } 
        if (jogos[i] < piorJogo || jogos[i] == 0) {
            piorPos = i;
            piorPos++
            piorJogo = jogos[i]
        }        
    }

    return [contMelhor, piorPos]
}

console.log(desempenho([10, 20, 20, 8, 25, 3, 0, 30, 1]))

