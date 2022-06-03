function relogio() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    
    
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        imagem.src = 'fotomanha.png'
        document.body.background = 'fotofundomanha.png'
    } else if (hora >= 12 && hora <=18) {
        //BOA TARDE
        imagem.src = 'fototarde.png'
        document.body.background = 'fotofundotarde.png'      
    } else {
        //BOA NOITE
        imagem.src = 'fotonoite.png'
        document.body.background = 'fotofundonoite.png'
        
    }
    if (hora < 10) {
        hora = `0${hora}`
    }
    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    if (segundos < 10) {
        segundos = `0${segundos}`
    }
    
    msg.innerHTML = `Agora são ${hora} horas ${minutos} minutos e ${segundos} segundos na capital baiana.`
    document.querySelector('#relogio').innerHTML= `${hora}:${minutos}:${segundos}`
    setInterval('relogio()', 1000)
}
// script para bloquear botão direito do mouse
/*if (document.addEventListener) {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        return false;
    });
} else { //Versões antigas do IE
    document.attachEvent("oncontextmenu", function(e) {
        e = e || window.event;
        e.returnValue = false;
        return false;
    });
}*/
