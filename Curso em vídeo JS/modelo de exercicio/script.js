var a = document.getElementById('1')
var b = document.getElementById('2')
var c = document.getElementById('3')

a.addEventListener('click', clicar1)
b.addEventListener('click', clicar2)
c.addEventListener('click', clicar3)
a.addEventListener('mouseenter', entrar1)
b.addEventListener('mouseenter', entrar2)
c.addEventListener('mouseenter', entrar3)
a.addEventListener('mouseout', sair1)
b.addEventListener('mouseout', sair2)
c.addEventListener('mouseout', sair3)

function clicar1() {
    a.style.background = 'yellow'
    a.innerText = 'Clicou'
    a.style.color = 'black'
}
function clicar2() {
    b.style.background = 'blue'
    b.innerText = 'Clicou'
}
function clicar3() {
    c.style.background = 'red'
    c.innerText = 'Clicou'
}
function entrar1() {
    a.style.background = 'green'
    a.innerHTML = 'Entrou no primeiro'
}
function entrar2() {
    b.style.background = 'green'
    b.innerHTML = 'Entrou no segundo'

}
function entrar3() {
    c.style.background = 'green'
    c.innerHTML = 'Entrou no terceiro'
}
function sair1() {
    a.style.background = 'black'
    a.style.color = 'white'
    a.innerHTML = 'Saiu do primeiro'
}
function sair2() {
    b.style.background = 'black'
    b.style.color = 'white'
    b.innerHTML = 'Saiu do segundo'
}
function sair3() {
    c.style.background = 'black'
    c.style.color = 'white'
    c.innerHTML = 'Saiu do terceiro'
}