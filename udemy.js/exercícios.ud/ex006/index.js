for (number = 01; number <= 10; number++) {
    console.log('Número ', number)
}

for (i = 15; i <= 30; i++) {
    console.log('number ', i)
}


numberr = 40

while (numberr <= 50) {
    if (numberr === 47) break
    console.log('number ', numberr)
    numberr++
}


ii = 50

do {
    console.log('numero ', ii)
    ii++
} while (ii <= 60)


const myCar = {
    model: 'Honda',
    year: 1995,
    km: 100000
}

for (let i in myCar) 
    console.log(i, myCar[i])


    const friends = ['Dario', 'Oswald']

    for (let i of friends)
        console.log(i)