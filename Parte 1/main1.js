function carregar() {
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('img')
    var data = new Date();
    var hora = 5
    var minuto = data.getMinutes();
    mensagem.innerHTML = `A hora atual é ${hora}h:${minuto}min`
    
    if (hora >= 5 && hora <= 12) {
      document.body.style.background = 'yellow'
      am.src='amanhecer.jpg'
    } else if (hora >= 13 && hora <= 18) {
      document.body.style.background = 'orange'
      am.src='entardecer.jpg'
    } else {
      document.body.style.background = 'blue'
      am.src='noite.jpg'
    }
  }