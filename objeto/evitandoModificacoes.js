// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // ignorado
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Luis',
    idade: 33
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Scapin' // ignorado
delete pessoa.nome // ignorado
pessoa.idade = 34
console.log(pessoa)

// Object.freeze = selado + valores constantes