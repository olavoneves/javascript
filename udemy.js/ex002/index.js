let itemName = 'Pen' // String
let itemPrice = 2 // Numero
let itemAvaliable = true // Boobean
let itemColor = 'lightblue' // Underfined

let pen = {
    itemName: 'Pen',
    itemPrice: 2,
    itemAvaliable: true,
    itemColor: 'lightgray'
}

pen.itemColor = 'darkred'
console.log(pen)


let friends = ['João', 'Elizabeth', 'Jorge']
friends[1] = 'Mathias'
console.log(friends)

function saleStatus(status, total) {
    console.log('Transaction ' + status + '! Total amount: $ ' + total)
}

saleStatus('Approved', 50)

function percentage01(price) {
    return price - (price * 20 / 100)
}


console.log(percentage01(100))