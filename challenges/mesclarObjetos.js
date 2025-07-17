function mesclarObjetos() {
    let a = {
        name: "Lucas",
        age: 19
    }

   let b = {
        name: "Luan",
        age: 19
    }

    let c = {...a, ...b}
    return c
}

console.log(mesclarObjetos({a: 1, b:2}))

