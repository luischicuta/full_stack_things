let telefone = '5';

console.log( telefone.padEnd(9, '*') );  //Quantos itens a string deve ter e qual icone botar nos campos vazios.

console.log(telefone.padStart(9, '*')); //Mesma coisa do padEnd mas preenche no começo.

//========================================================================================

//Exemplo:

let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*');

console.log('Este é o seu cartão? '+cartaoMascarado);
