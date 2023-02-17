const prod1 = {}

prod1.nome = 'Teste'
prod1.preco = 499.99
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camiseta',
    preco: 49.99,
    obj: {
        id: 1,
        obj: {
            id: 2,
        }
    }
}

console.log(prod2)