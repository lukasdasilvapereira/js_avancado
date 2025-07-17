// DESTRUCTURING

// COM ARRAYS

let arr = [1, 2, 3, 4, 5, 6];

let [num1, num2, num3, num4, num5, num6] = arr

console.log(num1)


// COM OBJETOS

let pessoa = {
    nome: "Lucas",
    profissao: "Procurando",
    idade: 19
}

let = {
    nome: nameVar,
    profissao: profissionVar,
    idade: idadeVar
} = pessoa

console.log(nameVar)


// COM FUNÇÕES

function teste() {
    return ["teste", 45]
}

let [varA, varB] = teste()

console.log(varA)

// IGNORANDO ELEMENTOS 

let array = [5, 10, 15]

let [, dez, quinze] = array


console.log(dez)

// STRINGS

let palavra = "laranja"

let [z, y, v] = palavra

console.log(z, y, v)

// RESTO OPERATOR

let numeros = [10, 20, 5, 10 , 20]

let [um, ...resto] = numeros

console.log(resto)

// TOMAR CUIDADO , NÃO COMEÇAR COM CHAVES
