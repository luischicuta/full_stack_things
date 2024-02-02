let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

let res1 = lista.toString();  //Transforma o Array em String.
console.log(res1);

//==============================================================================

let res2 = lista.join('-'); //Transforma em string e separa pelo item do parametro.
console.log(res2);

//==============================================================================

let res3 = lista.indexOf('Corante'); //Pesquisa um item no array se der -1 é porque não achou.
console.log(res3);

//==============================================================================

lista.pop(); //Remove o ultimo item do array.

let res4 = lista;
console.log(res4);

//==============================================================================

lista.shift(); //Remove o primeiro item do array.

let res5 = lista;
console.log(res5);

//==============================================================================

lista.push('Prato'); //Adiciona um novo item no array.

let res6 = lista;
console.log(res6);

//==============================================================================

lista.splice(0, 1); //1° parametro é o item que você quer deletar, 2° é a quantidade de itens para deletar.

let res7 = lista;
console.log(res7);

//==============================================================================

let lista2 = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista3 = ['Prato', 'Liquidificador', 'Forno'];

let res8 = lista2.concat(lista3); //Concatena um Array com outro.

console.log(res8);

//==============================================================================

let lista4 = ['Ovo', 'Farinha', 'Corante', 'Massa'];

lista4.sort(); //Ordena o Array em ordem alfabética.

let res9 = lista4;

console.log(res9);

//==============================================================================

lista4.sort();
lista4.reverse(); //Inverte a ordem da lista.

let res10 = lista4;

console.log(res10);

//==============================================================================

let lista5 = [45, 4, 9, 16, 25];
let lista6 = [];

lista6 = lista5.map( function(item){
    return item * 2;
});  //Map executa uma função em cada um dos itens do array, nesse caso está multiplicando todos por 2.

let res11 = lista6;
console.log(res11);

//==============================================================================

lista6 = lista5.filter( function(item2){
    if(item2 < 20){
        return true;
    } else if (item2 > 20){
        return false;
    }
}); //Filtra os itens do array, nesse caso mostra apenas os que são menores que 20.

let res12 = lista6;
console.log(res12);

//==============================================================================

lista6 = lista5.every( function(item3){
    if(item3 > 20){
        return true;
    } else {
        return false;
    }
}); //Se todos os itens baterem com a condição, vai retornar TRUE, caso contrario retorna false.

let res13 = lista6;
console.log(res13);

//==============================================================================

lista6 = lista5.some( function(item4){
    if(item4 > 20){
        return true;
    } else {
        return false;
    }
}); //Vai retornar true se ao menos um item estiver na condição.

let res14 = lista6;
console.log(res14);

//==============================================================================

lista6 = lista5.find( function(item5){
    if(item5 == 16){
        return true;
    }
}); //Procura no array o item expecifico e se existir, exibe ele.

let res15 = lista6;
console.log(res15);

//==============================================================================

lista6 = lista5.findIndex( function(item5){
    if(item5 == 16){
        return true;
    }
}); //Mostra a posição do item caso seja encontrado.

let res16 = lista6;
console.log(res16);

//==============================================================================


