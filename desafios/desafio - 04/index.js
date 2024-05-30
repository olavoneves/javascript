function gerarTabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if (num.value.length == 0) {
        alert('Por favor digite um número.')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(let cont = 1;cont <= 10;cont++) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
        }
    }
}