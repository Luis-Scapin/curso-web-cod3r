function criarProduto(descricao, preco) {
    return {
        descricao,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 7299.99))
console.log(criarProduto('Mouse', 129.90))