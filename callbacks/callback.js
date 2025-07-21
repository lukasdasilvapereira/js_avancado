// CALLBACK SINCRONO => É EXECUTADO IMEDIATAMENTE

function exibirResultado(resultado) {
    console.log(`O resultado é ${resultado}`)
}

function calcular(calculo, callback) {
    let resultado = eval(calculo)
    console.log(resultado)
    callback(resultado)
}

calcular(
    window.prompt("Informe um cálculo"),
    exibirResultado
)

// CALLBACK ASSINCRONO 

function tratar(cbc) {
    sessionStorage.setItem("RespostasAPI", JSON.stringify(cbc))
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => tratar(json))

