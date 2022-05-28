var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 18) 
{
    console.log('Menor de idade')
    if (idade >= 16){
        console.log('Voto Opcional')
    } else {
        console.log('Não vota')
    }
} else if (idade > 65){
    console.log('Idoso') 
    console.log('Voto Opcional')
} else 
    {
    console.log('Maior de idade')
    console.log('Voto Obrigatório')
    }
    