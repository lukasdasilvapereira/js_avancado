function images() {
    let container = document.createElement("div")
    let image = document.createElement("img")
    let image2 = document.createElement("img")
    image.src = [
        "/dog.jpg",
    ]
    image2.src = "/europa.jpg"
    container.appendChild(image)
    container.appendChild(image2)
    document.body.appendChild(container)
}

images()