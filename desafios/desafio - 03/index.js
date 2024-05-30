function contar() {
    var ini = document.getElementById('num01') 
    var fim = document.getElementById('num02')
    var pas = document.getElementById('num03')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[Erro  !!] Faltam dados .')
    } else {
        res.innerHTML = ' Contando...'
        var um = Number(ini.value)
        var dois = Number(fim.value)
        var tres = Number(pas.value)
        
        for(var cont = um; cont <= dois; cont += tres) {
            res.innerHTML += `${cont}`
        }
    }
}