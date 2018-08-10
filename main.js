let nome = document.querySelector('.nome')
let andress = document.querySelector('.andress')
let cep = document.querySelector('.cep')
let fone = document.querySelector('.fone')
let hour = document.querySelector('.hour')
let description = document.querySelector('.description')
let distance = document.querySelector('.distance')
let site = document.querySelector('.site')
let checkbox = Array.from(document.querySelectorAll('input'))



function getLocal(comercios) {
  fetch(comercios)
    .then(res => res.json())
    .then(json => Busca(json))
}

var Busca = function (local) {

let item = document.querySelector('.item')
let inputs = document.querySelectorAll('input')

for(let a of inputs){
    a.addEventListener('click', (event) => {
        item.innerHTML = ''
        for (let y of checkbox){
            if (y.checked == true){
                let marcado = y.value
                for (let i of local){
                    if (i.id == marcado){
                    item.insertAdjacentHTML('beforeend', `<div class="itens">
                     <h1>Nome: </h1>${i.nome}
                     <h4>Endereço: </h4>${i.endereco}
                     <h4>Cep: </h4>${i.cep}
                     <h4>Telefone: </h4>${i.telefone[0]}<br>${i.telefone[1]}
                     <h4>Horário: </h4>${i.horario}
                     <h4>Descrição: </h4>${i.descricao}
                     <h4>Distância: </h4>${i.distancia}
                     <h4>Sites: </h4>${RetornaSites(i.social)}<br></div>`)
                    }
                }
            }
        }
        
    })
}





function RetornaSites(sociais){
    let urls =  Object.values(sociais).map(x => `<a href = "${x}">${x}<br>`).join('')
    return urls
}
}

getLocal('\comercios.json')