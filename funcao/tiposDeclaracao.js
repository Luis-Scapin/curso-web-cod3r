console.log(soma(3, 4)) // pode ser usada em qualquer parte do arquivo

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // só pode ser usado depois da atribuição

// named function expression
const mult = function multiply(x, y) {
    return x * y
}
console.log(mult(3, 4))