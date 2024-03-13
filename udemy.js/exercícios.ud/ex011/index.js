
function movie() {
    console.log('Oppenheimmer')
}
movie()

const eat = function() {
    console.log('Banana')
}
eat()

const fruit = eat
fruit()

function price(a, c) {
    let tt = 5
    for(let value of arguments)
        tt += value
    return tt
}
console.log(price(23, 45, 67))


function carLoan(loan, rate = 9.2, years = 4) {
    return loan * rate / 100 * years
}
console.log(carLoan(35000))