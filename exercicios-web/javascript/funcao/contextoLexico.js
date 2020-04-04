const valor = 'Global'

 function minhaFuncao() { // Função tem do local em que foi definida
     console.log(valor)     
 }

 function exec() {
     const valor = 'local'
     minhaFuncao()
 }

 exec()