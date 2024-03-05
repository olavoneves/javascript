
let productValue = Number(prompt('Enter the product value: '))

if (productValue >= 25) {
    document.getElementById('result').innerHTML = 'Approved'
}

else {
    document.getElementById('result').innerHTML = 'Denied'
}

