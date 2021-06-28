function carregar(){
var msg = document.querySelector('div#msg')
var img = document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} hora(s) - `

    if (hora >= 0 && hora < 12){
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#5756a0'
        msg.innerHTML += `Bom dia!`
    } else if (hora >= 12 && hora < 18){
        img.src ='imagens/tarde.jpg'
        document.body.style.background = '#b3905c'
        msg.innerHTML += `Boa tarde!`
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#272727'
        msg.innerHTML += `Boa noite!`
    }

}