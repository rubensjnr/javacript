let amigo = {
    nome: 'Rubens',
    sexo: 'M',
    peso: 80.50,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} esta pesando ${amigo.peso}Kg`)