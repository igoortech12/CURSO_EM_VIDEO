function converter() {
    let distancia = Number.parseFloat(window.prompt('Digite uma distância em metros (m)'))
    window.alert('Processando conversão da distância '+distancia+'m...')
    let km = distancia / 1000
    let Hm = distancia / 100
    let Dam = distancia / 10
    let dm = distancia * 10
    let cm = distancia * 100
    let mm = distancia * 1000
    //window.alert('A conversão é: '+km+'Km.')
    let res = document.getElementById('valores')
    res.innerHTML = `<p>Vale: ${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>Vale: ${Hm} hectômetros (Hm)</p>`
    res.innerHTML += `<p>Vale: ${Dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>Vale: ${dm} decímetros (dm)</p>`
    res.innerHTML += `<p>Vale: ${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>Vale: ${mm} milímetros (mm)</p>`
}