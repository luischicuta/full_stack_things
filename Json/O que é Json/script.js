//JSON = JAVASCRIPT OBJECT NOTATION
let pessoa = {nome:"Bonieky", idade:90};

let pessoa2 = {
    nome: 'Luis',
    idade: 22,
    caracteristicas: ['lindo','gostoso','maravilhoso'],
    estetica: {
        altura: 900,
        peso: 10
    }
};

console.log(`Pessoa 1 é ${pessoa.nome}`);
console.log(`Ele tem ${pessoa.idade} anos de idade!`);
console.log(`A pessoa 2 é o ${pessoa2.nome}`);
console.log(`Ele tem ${pessoa2.idade} anos de idade!`);
console.log(`Ele é ${pessoa2.caracteristicas[0]}`);
console.log(`E possui ${pessoa2.estetica.altura}cm de altura!`);
console.log(`Pesando apenas ${pessoa2.estetica.peso}kg.`);