const userName = new Promise((resolve, reject) => {
    const name = "Lucas"

    if(name == "Lucas") {
        resolve("O seu nome é Lucas")
    }
    else {
        reject("O seu nome não é Lucas")
    }
}).then((data) => {
    console.log(data)
})

const fazerDownload = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Download feito")
    }, 2000);
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})