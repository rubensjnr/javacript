function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('input#txtAno')
    var res = document.querySelector('div#res')
    var anoNascimento = Number(nasc.value)

    if (anoNascimento == 0 || anoNascimento > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - anoNascimento
        var genero = ''
        var img = document.querySelector('img#imgx')
        if (fsex[0].checked) {
            genero = 'Homem'

            if( idade >= 0 && idade < 10){ 
               //Criança
                img.setAttribute('src','imagens/crianca-m.jpg')
            } else if (idade >= 10 && idade < 21) {
                //Adolescente
                img.setAttribute('src','imagens/adolescente-m.jpg')
            } else if (idade >= 21 && idade < 35) {
                //Adulto-jovem
                img.setAttribute('src','imagens/m-adulto-jovem.jpg')
            } else if (idade >= 35 && idade < 60) {
                //adulto
                img.setAttribute('src','imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'

            if( idade >= 0 && idade < 10){ 
                //Criança
                 img.setAttribute('src','imagens/crianca-f.jpg')
             } else if (idade >= 10 && idade < 21) {
                 //Adolescente
                 img.setAttribute('src','imagens/adolescente-f.jpg')
             } else if (idade >= 21 && idade < 35) {
                 //Adulto-jovem
                 img.setAttribute('src','imagens/f-adulto-jovem.jpg')
             } else if (idade >= 35 && idade < 60) {
                 //adulto
                 img.setAttribute('src','imagens/adulto-f.jpg')
             } else {
                 //idoso
                 img.setAttribute('src','imagens/idosa-f.jpg')
             }

        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.style.textAlign = 'center'
    }
}

