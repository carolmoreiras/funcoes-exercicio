//# Exercício 1
//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function imprimeNome(nome) {
    console.log(`Olá, ${nome}!`)
}

imprimeNome("Carol")

/*b) Declare uma função que receba um número como parâmetro imprima no 
console a tabuada do dele. Chame esta função várias vezes com números 
diferentes. */

function imprimeTabuada(numero1) {
    console.log(numero1 + " x 1 = " + numero1*1)
    console.log(numero1 + " x 2 = " +  numero1*2)
    console.log(numero1 + " x 3 = " +  numero1*3)
    console.log(numero1 + " x 4 = " +  numero1*4)
    console.log(numero1 + " x 5 = " +  numero1*5)
    console.log(numero1 + " x 6 = " +  numero1*6)
    console.log(numero1 + " x 7 = " +  numero1*7)
    console.log(numero1 + " x 8 = " +  numero1*8)
    console.log(numero1 + " x 9 = " +  numero1*9)
    console.log(numero1 + " x 10 = " +  numero1*10)
    console.log("")
}

imprimeTabuada(2)
imprimeTabuada(4)
imprimeTabuada(5)

/*c) Comente as funções criadas acima, e reescreva-as utilizando expressões
 de função, ou __arrow functions__ */

const imprimeNomeArrow = (nome) => {
    console.log(`Olá, ${nome}!`) 
}

imprimeNomeArrow("Carol")


const imprimeTabuadaArrow = (numero1) => {
    console.log(numero1 + " x 1 = " + numero1*1)
    console.log(numero1 + " x 2 = " +  numero1*2)
    console.log(numero1 + " x 3 = " +  numero1*3)
    console.log(numero1 + " x 4 = " +  numero1*4)
    console.log(numero1 + " x 5 = " +  numero1*5)
    console.log(numero1 + " x 6 = " +  numero1*6)
    console.log(numero1 + " x 7 = " +  numero1*7)
    console.log(numero1 + " x 8 = " +  numero1*8)
    console.log(numero1 + " x 9 = " +  numero1*9)
    console.log(numero1 + " x 10 = " +  numero1*10)
    console.log("")
}

imprimeTabuadaArrow(10)