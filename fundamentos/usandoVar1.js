{
    {
        {
            {
                var sera = 'Será?' // escopo = global
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 // escopo = function
    console.log(local)
}

teste()
console.log(local)