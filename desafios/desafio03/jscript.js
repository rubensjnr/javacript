function contar(){

    var inicio = document.querySelector('#numeroInicio')
    var final = document.querySelector('#numeroFinal')
    var passos = document.querySelector('#numeroPassos')
    var res = document.querySelector('#resultado')
    var ini = Number(inicio.value)
    var fim = Number(final.value)
    var npassos = Number(passos.value)

    if (ini == 0 & fim == 0 || npassos == 0){
        window.alert('ERRO! VERIFIQUE OS DADOS!!!')
    } else {
        res.innerHTML = `Contando: `
        if (ini <= fim){
            for ( let c = ini ; c <= fim ; c += npassos ){
                res.innerHTML += `\u{1F449}${c}`

            } 
        } else {
            for (let d = ini; d >= fim; d -= npassos){
                res.innerHTML += `\u{1F449} ${d}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}