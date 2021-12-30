var dolar = Number.parseFloat(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function converter() {
    var carteira = Number.parseFloat(window.prompt('Quantos R$ você tem na carteira?'))
    var resultado = carteira / dolar
    let res = document.getElementById('resultado')
    res.innerHTML = `<p>Com o valor da sua carteria, você poderá comprar ${resultado} dólares.</p>`
}