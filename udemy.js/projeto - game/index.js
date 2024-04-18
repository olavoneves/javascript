let computerNumbers
let userNumbers = []

function inicio() {
   computerNumbers = Math.floor(Math.random() * 100 + 1)
}

function compareNumber() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
}