
function enviar() {
    var inicio = document.getElementById('inicio')
    var inicioMod = Number(inicio.value)
    var fim = document.getElementById('fim')
    var fimMod = Number(fim.value)
    var passo = document.getElementById('passo')
    var passoMod = Number(passo.value)
    var res = document.getElementById('res')
  
   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       alert('[ERRO] Faltam dados!')
   } else {
        res.innerHTML = 'Contando: '
   } if (inicioMod < fimMod) {
       for (var c = inicioMod; c <= fimMod; c += passoMod) {
       res.innerHTML += `${c} `
   }
 } while (passoMod > fimMod) {
        alert('[ERRO] Opção PASSO é maior que a opção FIM.')
        break
   } for (var  c = inicioMod; c >= fimMod; c -= passoMod) {
       res.innerHTML += `${c} `
   }
   res.innerHTML += `<br>Fim!!!`
}