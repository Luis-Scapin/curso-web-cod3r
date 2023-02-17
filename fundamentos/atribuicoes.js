const a = { name: 'Teste' }

console.log(a)

const b = a // Atribuição por referência

console.log(b)

b.name = 'Mudou'

console.log(a, b)

let c = 3

let d = c // Atribuição por valor

d++

console.log(c, d)