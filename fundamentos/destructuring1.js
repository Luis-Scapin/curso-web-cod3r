// novo recurso do ES2015

const pessoa = {
    nome: 'Luis',
    idade: 34,
    endereco: {
        logradouro: 'Rua Não sei o que lá',
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)