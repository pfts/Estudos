function relogio(a,b,c,d){
    if(b >= 0 && b < 12) {
        //BOM DIA
        a.src = 'fotomanha.png'
        document.body.background = 'fotofundomanha.png'
    } else if (b >= 12 && b <=18) {
        //BOA TARDE
        a.src = 'fototarde.png'
        document.body.background = 'fotofundotarde.png'      
    } else {
        //BOA NOITE
        a.src = 'fotonoite.png'
        document.body.background = 'fotofundonoite.png'        
    }
    if (b < 10) {
        b = `0${b}`
    }
    if (c < 10) {
        c = `0${c}`
    }
    if (d < 10) {
        d = `0${d}`
    }
}
    var msg = document.getElementById('msg')
    var data = new Date()    
    var imagem = document.getElementById('imagem')// a
    var hora = data.getHours()// b
    var minutos = data.getMinutes()// c
    var segundos = data.getSeconds()// d
    

    msg.innerHTML = `Agora são ${hora} horas ${minutos} minutos e ${segundos} segundos na capital baiana.`
    document.querySelector('#relogio').innerHTML= `${hora}:${minutos}:${segundos}`
    setInterval('relogio()', 1000)
    relogio(imagem,hora,minutos,segundos)
    