console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

const logThisArrow = _ => {
    console.log('Dentro de uma função arrow...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThisArrow()