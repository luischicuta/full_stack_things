//Programação Funcional: Factory
//Este tipo de programação é a POO usando funções ao invés de classes

//Exemplo de Objeto Pessoa criado com váriavel:
/*
let person = {
    name: 'Luis',
    lastName: 'Chicuta',
    age: 90
}
*/

//Normalmente função Factory usa a palavra "create":
//Function para criar objeto pessoa:
function createPerson(name, lastName, age){
    return {
        name,
        lastName,
        age
    }
}

//Instânciando objetos:
let person1 = createPerson('Luis', 'Chicuta', 90);
let person2 = createPerson('Junior', 'Fulanildo', 120);

console.log(`A pessoa 1 se chama ${person1.name} ${person1.lastName} e tem ${person1.age} anos de idade.`)
console.log(`A pessoa 2 se chama ${person2.name} ${person2.lastName} e tem ${person2.age} anos de idade.`)