//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.


// declaração - informações do que a função faz
function imprimeSoma(numero1, numero2){
    const soma = Number(numero1) + Number(numero2)
    console.log(soma)

}
// invocação - chamada - utilização - executa o código que foi declarado
imprimeSoma(100,200)


//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function imprimeBooleano(num1, num2){
    const Resultado = num1 >= num2
    console.log("O numero 9 é maior ou igual a 5?", (Resultado))

}
imprimeBooleano(9, 5)


//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function recebeNum(numer1){
    const impresso = numer1 % 2 === 0
    console.log("O numero é par?",(impresso))
}
recebeNum(3)


//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

function recebeSalario(salario){
    const descontoINSS = (salario - (salario * 0.1))
    console.log("Salario com desconto INSS",(descontoINSS))
}
recebeSalario(2000)