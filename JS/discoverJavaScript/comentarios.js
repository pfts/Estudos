// Esse comando escreve uma mensagem no Console
console.log('Bem vindos ao Starter')
/* Esse comentário é multilinha
e o de cima é somente em linha
*/
console.log(`Pablo ${20+30}`)

// String com expressão numérica 

console.log(undefined)
console.log(null)
// undefined é diferente de null
console.log(undefined === null)

console.log({
    nome: "Pablo",
    idade: 32,
    andar: function() {
        console.log('andar')
        // Criando objetos
    }
})

//criando arrays

lista = [10,"Pablo", 12.5, "Roberto"]
console.log(lista[1]) //ou lista.length para saber o tamanho da lista

// declarando variáveis
// declarando a variável turno com a string "Noite"
var turno = ('Noite')
console.log(turno)

    {//scope

// var é global e, também local
// hoisting (o JS faz elevação da variável var, mas não eleva o valor, somente a variável var [let e const não elevam])
    var x = 1
    console.log('> existe x antes do bloco? ', x)

    {
        // escopo é a visibilidade do bloco
        // utilizar o 'const' para evitar mudança de variável entre os escopos global e os locais
        var x = 25

    }
    var x = 30
    console.log('> existe x depois do bloco? ', x)}


    {// concatenando variáveis com string com sinal de +
    let age, name
    age = 32
    name = ("Pablo")
    console.log(name + ' tem ' + age + ' anos.')

    // ou interpolando variáveis com string com utilização da crase
    console.log(`${name} tem ${age} anos`)}
    
    //criando objetos com os valores
    const person = {
        name: 'Pablo',
        age: 32,
        weight:  82.5,
        isAdmin: true}
    //para chamar valores do objeto no console
    console.log(`${person.name} tem ${person.age} anos. `)
// declarando variável weight
  let weight
  weight = 82
  console.log(weight)
  console.log(typeof weight) // verificando o tipo da variável weight
// declarando variáveis de uma só vez
  let name, age, stars, isSubscribed
  name = 'Pablo'
  age = 32
  stars = 4.9
  isSubscribed = true
  console.log(`${name} tem ${age} anos e está com ${stars} estrelas e é ${isSubscribed}.`) // imprimindo no console
// criando objeto carteiro
    let carteiro = {
    salario: 2000,
    nome: 'Pablo',
    peso: 82,
    altura: 1.82,
  } // imprimindo objeto carteiro no console com auxílio da crase
console.log(`O carteiro ${carteiro.nome} recebe ${carteiro.salario} reais por mês, pesa ${carteiro.peso}kg e mede ${carteiro.altura} de altura.`)


