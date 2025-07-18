// CREATE ELEMENT
let contido = document.createElement("div")
contido = document.body
contido.className = "Contido"
contido.id = "meu-id"

console.log(contido)

// APPEND CHILD AND REMOVE CHILD

let para = document.createElement("p")
para.innerHTML = "Olá Pessoal"

let container = document.querySelector(".conteudo")

container.appendChild(para)
//container.removeChild(para)

// EXERCICIO MEU

let container2 = document.createElement("div")

let paragrafo = document.createElement("p")

paragrafo.innerHTML = "Isso é um paragrafo dentro da div pai"

paragrafo.style.color = "blue"

container2.appendChild(paragrafo)

document.body.appendChild(container2) // SERVE PRA MOSTRAR NO HTML

