function Pessoa() {
    this.idade = 0

    const self = this // Aponta para a instancia em que está sem executado

    setInterval(function() {
        // this.idade++ // Sem o bind este this aponta para o setInterval
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa