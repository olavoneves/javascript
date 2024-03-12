const movies = [
    {id : 1, movieName: 'Senhor dos Âneis'},
    {id : 2, movieName: 'Percy Jackson'},
    {id : 3, movieName: 'Piratas of Caribean'},
    {id : 4, movieName: 'Jogos Vorazes'}
]

console.log(movies.find(movie => movie.movieName == 'Senhor dos Âneis'
))

const num = [2, 3, 4]
const final = num.pop()

console.log(num)
console.log(final)

let number = [4, 6, 8, 10]

number = []

console.log(number)

let nunms = [2, 4, 6, 7]
let letters = ['b', 'y', 'o']

all = nunms.concat(letters)
half = all.slice(3, 5)

console.log(all)
console.log(half)

let clients = ['Olavo', 'Yas']

console.log(clients)

let clientsJoin = clients.join('; ')

console.log(clientsJoin)

const tempAust = [25, 05, -11, 09, 26]

const tempPositive = tempAust.filter(function(value){
    return value >= 00
})

console.log(tempPositive)