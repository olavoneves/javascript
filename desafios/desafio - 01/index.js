function carregar() {
    var hora = window.document.getElementById('hora')
    var img = window.document.getElementById('img01')
    var data = new Date()
    var horario = data.getHours()
    hora.innerHTML = ` Agora são ${horario} horas.`

    if (horario >= 0 && horario < 12) {
        img.src = 'foto-manhã.jpg'
        document.body.style.background = 'rgb(205, 164, 113)'
    }else if (horario >= 12 && horario < 18) {
        img.src = 'foto-tarde.jpg'
        document.body.style.background = 'rgb(205, 164, 113)'
    }else if (horario >= 18 && horario <= 0) {
        img.src = 'foto-noite.jpg'
        document.body.style.background = 'rgb(117, 87, 144)'
    }
}