function saudacao(nome) {
    alert("Olá " + nome)
}

function processa(callback) {
    const nome = prompt("Digite seu nome: ")
    callback(nome)
}


processa(saudacao)

