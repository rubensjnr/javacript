let val = [5,8,4,9,6]
val.push(3)
val.sort()
console.log(`A variavel possui ${val.length} Casas.`)
for (let a = 0; a < val.length; a++){
    console.log(`A posição ${a} possui o valor ${val[a]}`)
}

console.log('DIVIDINDO')
console.log('===============')
console.log('DIVIDINDO')

let c = [5,8,4,9,6]
let d = c.indexOf(4)
c.sort()
    for(let b in c){
        console.log(`A posição ${b} possui o valor ${c[b]}`)
    }
    let f = c.indexOf(4)
    console.log(`O valor 4 esta na posição ${d} mas apos o (sort) ele fica na posição ${f}`)