function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var infAno = document.querySelector('input#txtnc')
    var anoNascimento = Number(infAno.value)
    var idade = ano - anoNascimento
    var res = document.querySelector('#result')
    var img = document.querySelector('#imgS')

    if (anoNascimento == 0 || anoNascimento > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('sexrd')
       var genero = ''
    } if (fsex[0].checked) {
        genero = 'Homem'
        if ( idade <= 10){
            img.src='imagens/crianca-m.jpg'
        } else if ( idade > 10 && idade < 18 ) {
            img.src='imagens/adolescente-m.jpg'
        } else if (idade >= 18 && idade <= 30){
            img.src='imagens/m-adulto-jovem.jpg'
        } else if (idade > 30 && idade < 60 ){
            img.src='imagens/adulto-m.jpg'
        } else {
            img.src='imagens/idoso-m.jpg'
        }

    } else if (fsex[1].checked){
        genero = 'Mulher'
        if ( idade <= 10){
            img.src='imagens/crianca-f.jpg'
        } else if ( idade > 10 && idade < 18 ) {
            img.src='imagens/adolescente-f.jpg'
        } else if (idade >= 18 && idade <= 30){
            img.src='imagens/f-adulto-jovem.jpg'
        } else if (idade > 30 && idade < 60 ){
            img.src='imagens/adulto-f.jpg'
        } else {
            img.src='imagens/idosa-f.jpg'
    }
}
    res.innerHTML = `Detectamos ${genero} de ${idade} anos !`

}


