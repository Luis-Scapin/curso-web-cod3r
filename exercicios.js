console.log('--- Exercício 1 ---')
const cumprimentar = function (text) {
    return `Olá, ${text}!`
}
console.log(cumprimentar("Leonardo"))
console.log(cumprimentar("Luis"))

console.log('--- Exercício 2 ---')
const idadeEmDias = function (idade) {
    return idade * 365
}
console.log(idadeEmDias(25))
console.log(idadeEmDias(34))

console.log('--- Exercício 3 ---')
const calcularSalario = function (horasTrabalhadas, valorHora) {
    return `Salário igual a R$ ${(horasTrabalhadas * valorHora).toFixed(2)}`
}
console.log(calcularSalario(150, 40.5))
console.log(calcularSalario(160, 32.27))

console.log('--- Exercício 4 ---')
const nomeDoMes = function (mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'
        , 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return meses[mes - 1]
}
console.log(nomeDoMes(1))
console.log(nomeDoMes(4))
console.log(nomeDoMes(7))

console.log('--- Exercício 5 ---')
const maiorOuIgual = function (valor1, valor2) {
    return typeof valor1 == typeof valor2 && valor1 >= valor2
}
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))

console.log('--- Exercício 6 ---')
const inverso = function (valor) {
    switch (typeof valor) {
        case 'boolean':
            return !valor
        case 'number':
            return -valor
        default:
            return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}
console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))

console.log('--- Exercício 7 ---')
const estaEntre = function (numero, minimo, maximo, inclusivo) {
    return inclusivo ? minimo <= numero && numero <= maximo :
        minimo < numero && numero < maximo
}
console.log(estaEntre(51, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))

console.log('--- Exercício 8 ---')
const multiplicar = function (valor1, valor2) {
    let acumulador = 0;
    for (let i = 0; i < valor2; i++) {
        acumulador += valor1
    }
    return acumulador
}
console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))

console.log('--- Exercício 9 ---')
const repetir = function (elemento, repeticoes) {
    const lista = []
    for (let i = 0; i < repeticoes; i++) {
        lista.push(elemento)
    }
    return lista
}
console.log(repetir("código", 2))
console.log(repetir(7, 3))
console.log(repetir("nada", 0))

console.log('--- Exercício 10 ---')
const simboloMais = function (quantidade) {
    // return '+'.repeat(quantidade)
    let mais = ''
    for (let i = 0; i < quantidade; i++) {
        mais += '+'
    }
    return mais
}
console.log(simboloMais(2))
console.log(simboloMais(4))

console.log('--- Exercício 11 ---')
const receberPrimeiroEUltimoElemento = function (array) {
    return [array[0], array[array.length - 1]]
}
console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]))

console.log('--- Exercício 12 ---')
const removerPropriedade = function (objeto, propriedade) {
    const novoObjeto = Object.assign({}, objeto)
    delete novoObjeto[propriedade]
    return novoObjeto
}
console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))

console.log('--- Exercício 13 ---')
