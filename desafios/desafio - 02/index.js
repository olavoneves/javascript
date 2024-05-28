function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO !')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // Bebe
                img.setAttribute('src', 'bebê-02.jpg')
            } else if (idade >= 5 && idade < 16) {
                // Criança
                img.setAttribute('src', 'criança-menino.jpg')
            } else if (idade >= 16 && idade < 38) {
                // Jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade >= 38 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
            // Bebe
            img.setAttribute('src', 'bebê.jpg')
            } else if (idade >= 5 && idade < 16) {
                // Criança
                img.setAttribute('src', 'criança-menina.jpg')
            } else if (idade >= 16 && idade < 38) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade >= 38 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'mulher-adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) 
    }
}