let info = ['Luis Cavalcante', 'Cavalcante', 'Luis', '@Luiss'];

let [nomeCompleto, sobrenome, nome, instagram] = info;

console.log(nomeCompleto, sobrenome, nome, instagram);


//Para poupar memória caso queira somente o primeiro e ultimo item do array:

let info2 = ['Luis Cavalcante', 'Cavalcante', 'Luis', '@Luiss'];

let [nomeCompleto2, , , instagram2] = info2;
console.log(nomeCompleto2, instagram2);

//Outro modo de se fazer já desconstruindo:

let [nome3, sobrenome3] = ['Luis', 'Cavalcante'];

console.log(nome3, sobrenome);