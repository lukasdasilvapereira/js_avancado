// CRIAÇÃO DE PROMESSAS

const prm = new Promise((resolve, reject) => {
    const nome = "Lucas"

    if (nome == "Lucas") {
        resolve("Usuário Lucas encontrado!!")
    } else {
        reject("O Usuário Lucas não foi encontrado")
    }
})

prm.then((data) => {
    console.log(data)
})

// ENCADEAMENTO DE THEN

const myPromise = new Promise((resolve, reject) => {
    const nome = "Lucas"

    if (nome == "Lucas") {
        resolve("Usuário Lucas encontrado!!")
    } else {
        reject("O Usuário Lucas não foi encontrado")
    }
})

myPromise.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// TRY CATCH


const myPromise3 = new Promise((resolve, reject) => {
    const nome = "Lucas"

    if (nome == "Lucas") {
        resolve("Usuário Lucas encontrado!!")
    } else {
        reject("O Usuário Lucas não foi encontrado")
    }
})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

// RESOLVER VARIAS PROMESSAS

const p1 = new Promise((resolve, reject) => {
    resolve("P1 ok")
})

const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 ok")
})

const resolver = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})


// CASO REAL FETCH REQUEST

const userName = 'lukasdasilvapereira'

fetch(`https://api.github.com/users/${userName}`), {
    method: "GET",
    header: {
        Accept: 'application/vnd.github.v3+json',

    },
}.then((response) => {
    console.log(typeof(response))
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(`O nome do usuário é ${data.name}`)
}).catch((err) => {
    console.log(err)
})
