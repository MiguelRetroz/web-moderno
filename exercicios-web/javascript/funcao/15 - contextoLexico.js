const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()// A função tem "consciência" do local onde foi escrita(Contexto Léxico)
    // Então o local onde ela for executada não influência
}