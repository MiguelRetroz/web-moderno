const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Break')
for(let x in nums) {
    if (x == 5) {
        break // Não age sobre o bloco do if, sim sobre o bloco mais próximo que pode ser influênciado por ele(Neste caso for)
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('Continue')
for(let y in nums) {
    if (y == 5) {
        continue // Age parecido com o break, mas em vez de sair fora do bloco ele pula neste caso um repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('Rotulo')
externo: for(let a in nums) {
    for(let b in nums) {
        if (a == 2 && b == 3) {
            break externo // Sem o rotulo o break agiria sobre o for interno(for b)
        }
        console.log(`Par = ${nums[a]}, ${nums[b]}`)
    }
}