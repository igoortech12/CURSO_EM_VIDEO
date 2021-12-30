function desafio() {
    let num = Number.parseInt(window.prompt('Digite um número qualquer: '))
    let ant = num - 1
    let suc = num + 1

    window.alert('Antes de ' +num+ ', temos o número ' +ant+ '. E antes de ' +num+ ', temos o número ' +suc+ '.')
    
}