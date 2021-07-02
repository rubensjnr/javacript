function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtnc')
    var res = document.querySelector('#result')
    var anoNascimento = Number(fano.value)
    var idade = ano - anoNascimento

    if (anoNascimento == 0 || anoNascimento > ano) {
            window.alert('ERRO! Verifique os dados!')
    } else {
        var img = document.querySelector('#imgS')
        var fsex = document.getElementsByName('sexrd')
        var genero = ''
        if (fsex[0].checked){
            if (idade <= 10){
                img.src='imagens/crianca-m.jpg'
            } else if ( idade > 10 && idade < 18){
                img.src='imagens/adolescente-m.jpg'
            } else if ( idade >= 18 && idade < 30 ) {
                img.src='imagens/m-adulto-jovem.jpg'
            } else if ( idade > 30 && idade <= 60 ){
                img.src='imagens/adulto-m.jpg'
            } else if (idade > 60 ){
                img.src='imagens/idoso-m.jpg'
            }
        
        } else if (fsex[1].checked){
            if (idade <= 10){
                img.src='imagens/crianca-f.jpg'
            } else if ( idade > 10 && idade < 18){
                img.src='imagens/adolescente-f.jpg'
            } else if ( idade >= 18 && idade < 30 ) {
                img.src='imagens/f-adulto-jovem.jpg'
            } else if ( idade > 30 && idade <= 60 ){
                img.src='imagens/adulto-f.jpg'
            } else if (idade > 60 ){
                img.src='imagens/idosa-f.jpg'
            }
        }
    }
    res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos!`


}