function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fAno = document.getElementById('ano')
        var res = document.getElementById('res')
        if (fAno.value.length == 0 || Number(fAno.value) > ano) {
            window.alert('ERRO !')
        } else {
            
        }
}