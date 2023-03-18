function falarDepoisDe(chamada, segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (frase && frase.trim().length > 0)
                resolve(`Chamada #${chamada}:\n${frase}`)
            else
                reject(`Chamada #${chamada}:\nNenhuma frase informada!`)
        }, segundos * 1000)
    })
}

falarDepoisDe(1, 4, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

falarDepoisDe(2, 10, 'Nossa, que demoraaa!!!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

falarDepoisDe(3, 2, ' ')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

falarDepoisDe(4, 6)
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))