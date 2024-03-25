/*
USANDO TIPAGEM NOS PARÂMETROS DE UMA FUNÇÃO
*/

//Nomeamos a tipagem nos parâmetros
//Nesse exemplo estamos transformando a primeira letra da palavra em MAIUSCULA:
function firstLetterUpperCase(name: string){
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

firstLetterUpperCase('luis');