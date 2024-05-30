function contar() {
    var ini = document.getElementById('num01') 
    var fim = document.getElementById('num02')
    var pas = document.getElementById('num03')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[Erro  !!] Faltam dados .')
        res.innerHTML = 'Impossivel realizar a contagem !'
    } else {
        res.innerHTML = ' Contando: <br>'
        var um = Number(ini.value)
        var dois = Number(fim.value)
        var tres = Number(pas.value)
        if (tres <= 0) {
            alert('Passo Inválido.')
            tres = 1
        }
        if (um < dois) {
            for(var cont = um;cont <= dois;cont += tres) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        } else {
            for(var cont = um; cont >= dois; cont -= tres) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}