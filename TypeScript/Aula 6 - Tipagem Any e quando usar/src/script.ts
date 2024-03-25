/*
O Type "Any" e quando usá-lo
*/

//O "Any" funciona unica e exclusivamente no Typescript, ele não é lido pelo Javascript. Este type deve ser usado como último recurso quando não tem como fazer de outra forma.

let nomes: any = ['Luis', 24, true]; //O typescript vai decidir por ele mesmo a tipagem dos dados, nesse caso, automáticamente ele está definindo a tipagem de cada item.
nomes.push(2); //Aceitará qualquer tipo de dado no push (String, Boolean, Numbers, etc).