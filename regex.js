var btn = document.querySelector('.btn')

var action = function(){

  var t1 = document.querySelector('#tel').value //Pega o valor do input referente ao telefone
  var m1 = document.querySelector('#email').value // Pega o valor do input referente ao e-mail
  var msg = document.querySelector('#mensagem').value // Pega o valor do textarea referente a mensagem

  let loadT = /[\d]+/g // Tratamento do regex do telefone
  let loadM = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i // Tratamento do regex do e-mail
  let loadMsg = /\b/g // Tratamento do regex da mensagem

  let c = t1.match(loadT) // match referente ao telefone
  let b = m1.match(loadM) // match referente ao e-mail
  let a = msg.match(loadMsg) // match retente a mensagem

  // Se o valor for diferente de null, é pq foi informado números e entra nas outras condições para tratamento
  if(c != null){
    c = c[0].substring(0, 12)
    if(a == null){
      alert('Escreva uma mensagem!\n')
    }else if(b == null){
      alert('E-mail incorreto')
    }else if(b.length == 0){
      alert('E-mail obrigatório')
    }else if(c == null){
      alert('Informe o telefone!')
    }else{
      alert('Enviado!\nEntraremos em contato!')
    }
  }else{ // Caso não for informado números no input do telefone, vai ser tratado nessa condição
    if(a == null){
      alert('Escreva uma mensagem!\n')
    }else if(b == null){
      alert('E-mail incorreto')
    }else if(b.length == 0){
      alert('E-mail obrigatório')
    }else if(c == null){
      alert('Informe o telefone!')
    }else{
      alert('Enviado!\nEntraremos em contato!')
    }
  }
}

btn.addEventListener('click', action)
