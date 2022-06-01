function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos na capital baiana.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = 'blue'
        
    } else if (hora >= 12 && hora <=18 && minutos <= 00 ) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = 'red'
        
        
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = 'black'
        
        
    }
}
// script para bloquear botão direito do mouse
if (document.addEventListener) {
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
}
