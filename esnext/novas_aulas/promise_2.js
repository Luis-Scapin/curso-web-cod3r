
// setTimeout(function () {
//     console.log('Executando callback...')

//     setTimeout(function () {
//         console.log('Executando callback...')

//         setTimeout(() => {
//             console.log('Executando callback...')

//         }, 2000);
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        console.log('Executando promise...')
        setTimeout(() => {
            resolve()
        }, tempo);
    })
}

esperarPor()
    .then(_ => esperarPor())
    .then(esperarPor)