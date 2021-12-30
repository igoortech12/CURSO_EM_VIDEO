function gerar() {
    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('tab')
    let contador = 1
    tab.innerHTML = ''
    while (contador <= 10) {
        let item = document.createElement('option')
        item.text = `${num} x ${contador} = ${num*contador}`
        tab.appendChild(item)
        contador++
    }
}