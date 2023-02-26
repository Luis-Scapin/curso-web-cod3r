// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } // ERRO

Object.freeze(pessoa)

pessoa.nome = 'Maria' // ignorado
pessoa.endereco = 'Rua ABC' // ignorado
delete pessoa.nome // ignorado
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria' // ignorado
console.log(pessoaConstante)