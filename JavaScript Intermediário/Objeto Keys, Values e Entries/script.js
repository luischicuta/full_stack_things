let lista = ['ovo', 'macarrão', 'feijão', 'pipoca'];

console.log( Object.keys(lista) ); //Mostra a Key do array ou objeto.
console.log(Object.values(lista)); //Mostra o valor da Key do array ou objeto.
console.log(Object.entries(lista)); //Mostra a Key e o valor do array ou objeto.

//=====================================================================================

//Exemplo em Objeto:

let pessoa = {
    nome:'Luis',
    sobrenome:'Cavalcante',
    idade:90
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
