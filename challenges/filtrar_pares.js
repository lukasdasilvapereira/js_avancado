function filtrarPares(arr) {
    arr = [2, 5, 10, 13, 25, 96]
    let array = arr.filter((number) => {
        return number % 2 == 0
    })
    console.log(array)
}

filtrarPares()

