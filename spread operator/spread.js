// SPREAD OPERATOR , 
// ELE ABRE OS ELEMENTOS E DA O RESULTO PEDIDO ...
// E FAZ ITERAÇÕES

let numbers = [1,2,3,4,5]

let maximum = Math.max(...numbers)

let minimum = Math.min(...numbers)

console.log(minimum)
console.log(maximum)


let username = "Lucas"
let letters = [...username]

console.log(letters)

let fruits = ["Apple", "Orange", "Banana"]
let foods = ["Hamburguer", "Pizza", "Potato"]

let newFruits = [...fruits, ...foods, "eggs", "milk"]

console.log(newFruits)