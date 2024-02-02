//Classes: Factory

class Person {

    age = 0; 

    constructor(name){  
        this.name = name;
    }

}

//Factory é um conceito, de criar objetos baseados em uma classe, exemplo:
//Abaixo é um função Factory (Fábrica)
function createPerson(name, age){
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Luis', 90);
console.log(`${p1.name} tem ${p1.age} anos de idade.`)