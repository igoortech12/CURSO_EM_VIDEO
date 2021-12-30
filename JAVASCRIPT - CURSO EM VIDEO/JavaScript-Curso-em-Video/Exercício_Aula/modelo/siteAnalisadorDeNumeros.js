let num = document.getElementById('num')
let cad = document.getElementById('cad')
let res = document.getElementById('res')
let add = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if(isNumero(num.value) && !inLista(num.value, add)) {
        add.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        cad.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já inserido na lista.')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if (add.length == 0) {
        alert('Adicione valores para começar.')
    } else {
        let total = add.length
        let maior = add[0]
        let menor = add[0]
        let soma = 0
        let media = 0
        for(let pos in add) {
            soma += add[pos]
            media = soma / total
            if(add[pos] > maior) {
                maior = add[pos]
            }
            if(add[0] < menor) {
                neomr = add[pos]
            }        
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}