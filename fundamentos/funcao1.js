//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(3, 5)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(12, 25))
console.log(soma(4))
console.log(soma())