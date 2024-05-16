var idade = 69
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade >= 65) {
        console.log('Voto opcional')
} else {
    console.log('Voto Obrigatorio')
}

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são aproximadamente ${hora} horas.`)
if (hora < 12) {
    console.log('Vamos tomar café ?')
}else if (hora <= 14) {
    console.log('Hora do Almoço')
}else if (hora <= 18) {
    console.log('Vamos tomar um cafézinho da tarde !')
}else {
    console.log('Hora da Janta')
}

var now = new Date()
var diaSete = now.getDay()
switch(diaSete) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break 
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido !!')
}