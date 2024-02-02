let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8];

console.log(outros);

//=======================================================

let info = {
    nome:'Luis',
    sobrenome:'Cavalcante',
    idade:90
};

let novaInfo = {
    ...info,
    cidade:'Cotia',
    estado:'São Paulo',
    país:'Brasil'
};

console.log(novaInfo);