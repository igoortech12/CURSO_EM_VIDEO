function comprar() {
    let produto = window.prompt('Que produto você está comprando?')
    let preco = Number.parseFloat(window.prompt('Quanto custa '+produto+' que você está comprando?'))
    let pago = Number.parseFloat(window.prompt('Qual foi o valor que você deu para pagar o '+produto+'?'))
    let troco = pago - preco
    window.alert('Você comprou um '+produto+' que custou '+preco+'. Você deu '+pago+'. Você recebeu de troco '+troco+'. Volte sempre!')
}