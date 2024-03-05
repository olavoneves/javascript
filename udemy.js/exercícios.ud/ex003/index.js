
let driver = 122
let speed = driver > 120 ? 'Above' : 'Below'

console.log(speed)

let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
console.log('Pode Votar : ' + podeVotar)

let podeViajar = !podeVotar 

console.log('Pode Viajar : ' + podeViajar)

let corCliente = 'Gray'
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque

console.log(corVendida)

let num01 = 4 + 3 * (5 - 2)

console.log(num01)
