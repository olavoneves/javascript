 function outcome() {

    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    if(document.getElementById('box01').checked)
        total = num1 + num2

    else if(document.getElementById('box02').checked)
        total = num1 - num2

    else if(document.getElementById('box03').checked)
        total = num1 * num2

    else if(document.getElementById('box04').checked)
        total = num1 / num2

    document.getElementById('resultArea').innerHTML = 'Resultado: ' + String(total)
 }