
function calc() {
    var txtv = window.document.getElementById('vel')
    var res = window.document.getElementById('res')
    var tvel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${tvel} km/h. `
    
    if (tvel > 60) {
        res.innerHTML += ' Você está multado por excesso de velocidade !!!'
    }else {
        res.innerHTML += ' Mantenha o nível de velocidade. '
    }
    res.innerHTML += ' Dirija sempre com segurança !'
}