let val = [5,8,4,9,6]
val.push(3)
val.sort()
console.log(`A variavel possui ${val.length} Casas.`)
for (let a = 0; a < val.length; a++){
    console.log(`A posição ${a} possui o valor ${val[a]}`)
}
