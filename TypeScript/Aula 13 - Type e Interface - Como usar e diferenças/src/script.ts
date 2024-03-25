/*
Type e Interface: Como usar e diferenças
*/

//Como criar seus próprios Types
//Usando PascalCase, ao invés de camelCase
//Método 1:
//Criamos uma tipagem que pode ser string ou number

type Idade = string | number;
type NomeCompleto = string;
let nome: NomeCompleto = 'Chicuta';

let idade: Idade = 90;
function mostrarIdade(i: Idade): Idade {
    return i;
}

//Método 2:
//Criamos uma tipagem para um objeto
//Com este método, não é possível criar novas propriedades ao objeto.

type User1 = {
    nome:string,
    idade:number
};


//Método 3 (Interfaces), funciona exatamente igual o exemplo acima:
//Com este método, é possível criar novas propriedades ao objeto.
interface User {
    nome: string,
}
//Extendendo as propriedades do objeto User, usando interface:
interface User {
    idade: number
}


function resumo(usuario: User){
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos.`;
}

resumo({
    nome: 'Chicuta',
    idade: 90
});


