let num = [5, 8, 2]
//num[3] = 6
num.push(6)
//num.sort()

console.log(`O primeiro valor do vetor é ${num[0]}.`)

console.log(`Nosso vetor é o ${num}.`)

console.log(`O vetor tem ${num.length} posições.`)

console.log(`O primeiro valor do vetor é ${num[0]}.`)

console.log(`O vetor em ordem crescente é ${num.sort()}.`)

for (let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}

console.log(`...`)

for (let pos in num){
    console.log(num[pos])
}