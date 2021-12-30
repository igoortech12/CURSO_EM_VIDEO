function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'pictures/crianca-masculino.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', 'pictures/homem-jovem.jpg')
            }else if (idade <50) {
                img.setAttribute('src', 'pictures/homem.jpg')
            }else {
                img.setAttribute('src', 'pictures/homem-velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'pictures/crianca-feminino.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', 'pictures/mulher-jovem.jpg')
            }else if (idade <50) {
                img.setAttribute('src', 'pictures/mulher.jpg')
            }else {
                img.setAttribute('src', 'pictures/mulher-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}