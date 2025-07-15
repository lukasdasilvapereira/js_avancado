// MAP

// TRANSFORMA O ELEMENTO DE UM ARRAY , RETORNANDO UM NOVO ARRAY

const numbers = [2, 4, 5, 7 , 8]

const numberTwo = numbers.map((number) =>{
    return number * 2
})

console.log(numberTwo)

// FILTER

// SELECIONA OS ELEMENTOS DE UM ARRAY QUE ATENDEM A UMA CONDIÇÃO

const idades = [8, 25, 14, 45];

const pares = idades.filter((ages) => {
    return ages % 2 == 0    
}
)

console.log(pares)

// REDUCE

// REDUZIR TODOS OS VALORES PRA UM SÓ

const sumOfAges = idades.reduce((valor, objeto) =>{
    return valor + objeto
}, 0)

console.log(sumOfAges)