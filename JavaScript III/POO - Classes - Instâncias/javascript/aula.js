//Classes: Instância

class Person {

    altura = "10 metros"; //Altura padrão para todos, fornecida fora do constructor

    constructor(name, age){  
        this.name = name; //Aqui é como se fosse p1.name, mas como é um template, usamos o this.
        this.age = age; 
    }
}

//Instancias:
let p1 = new Person("João", 20); //p1 é o objeto em si, que vai criar uma nova pessoa (Person);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

p1.altura = 2; //Modifiquei apenas a altura do P1

//---------------------------------------------------------------------------------------------------------//
console.log(`P1 = ${p1.name} tem ${p1.age} anos de idade e possui incríveis ${p1.altura} metros de altura!`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos de idade e possui incríveis ${p2.altura} metros de altura!`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos de idade e possui incríveis ${p3.altura} metros de altura!`);