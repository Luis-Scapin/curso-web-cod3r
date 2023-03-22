function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Teste', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => consol.log(valor),
        err => console.log(`Erro específico: ${err}`)
    )
    .then(_ => console.log('Quase Fim!!!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))