// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Luis',
    idade: 34,
    peso: 70,
    endereco: {
        logradouro: 'Rua não sei o que lá',
        numero: 101
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)