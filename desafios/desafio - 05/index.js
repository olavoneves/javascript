var num = document.getElementById('num')
var val = document.getElementById('val')
let con = document.getElementById('con')
let valor = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inVal(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inVal(num.value, valor)) {
        console.log('Tudo OK !')
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        val.appendChild(item)
    } else {
        window.alert('Valor inválido ou repetido !')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valor.length == 0) {
        alert('Adicione valores!')
    } else {
        let ele = valor.length
        let maior = valor[0]
        let menor = valor [0]
        let soma = 0
        let media = 0

        for(let pos in valor) {
            soma += valor[pos]
            if(valor[pos] > maior) 
                maior = valor[pos]
            if(valor[pos] < menor) 
                menor = valor[pos]
        }
        media = soma / ele

        res.innerHTML = ''
        res.innerHTML += `<h2> Ao todo, foi adicionado ${ele} elementos. </h2>`
        res.innerHTML += `<h2> O maior valor informado foi ${maior}. </h2>`
        res.innerHTML += `<h2> O menor valor informado foi ${menor}. </h2>`
        res.innerHTML += `<h2> Somando todos valores, temos ${soma}. </h2>`
        res.innerHTML += `<h2> A media entre os valores é de ${media}` 
    }
}