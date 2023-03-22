function primeiroElemento(array) {
    return array[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(["Vários", "Valores"])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)