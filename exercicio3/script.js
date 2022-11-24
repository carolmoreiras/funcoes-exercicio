//a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma (numero1, numero2){
    const operacao = Number(numero1) + Number(numero2)
    return operacao
}


function subtracao (numero1, numero2){
    const operacao = Number(numero1) - Number(numero2)
    return operacao

}


function multiplicacao(numero1, numero2){
    const operacao = Number(numero1) * Number(numero2)
    return operacao

}


function divisao (numero1, numero2){
    const operacao = Number(numero1) / Number(numero2)
    return operacao

}

//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const num1 = Number(prompt("Digite um numero"))
const num2 = Number(prompt("Digite outro numero"))

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const resultadoSoma = soma(num1, num2)
const resultadoSubtracao = subtracao(num1, num2)
const resultadoMultiplicacao = multiplicacao(num1, num2)
const resultadoDivisao = divisao(num1, num2)

console.log(resultadoSoma)
console.log(resultadoSubtracao) 
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)
    




