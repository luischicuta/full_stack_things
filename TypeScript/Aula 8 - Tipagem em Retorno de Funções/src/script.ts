/*
USANDO TIPAGEM NO RETORNO DE UMA FUNÇÃO
*/

//PENDENTE FAZER A AULA!!!!!!!!!!!!!!!!!!!!!!!!!!

//Nomeamos a tipagem nos parâmetros e no resultado da função
//Nesse exemplo estamos transformando a primeira letra da palavra em MAIUSCULA:
function firstLetterUpperCase(name: string): string{
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

let nome = firstLetterUpperCase('Chicuta')

//Outro exemplo:
//Esta função vai somar entradas que deverão ser números e o resultado também deverá ser um número:
function somar(n1: number, n2: number): number{
    return n1 + n2;
}

let alguma = somar(20, 4);