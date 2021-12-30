function converter() {
    let temperatura = Number.parseFloat(window.prompt('Digite uma temperatura em C (Celsius)'))
    window.alert('Processando...')
    const fahrenheit = (1,8 * temperatura) + 32
    const kelvin = temperatura + 273
    let res = document.getElementById('resultado')
    res.innerHTML = `<h1>A temperatura de ${temperatura}C, corresponde a...</h1>`
    res.innerHTML += `<p>Celsius para Fahrenheit: ${fahrenheit}F<p>`
    res.innerHTML += `<p>Celsius para Kelvin: ${kelvin}K<p>`
    
}