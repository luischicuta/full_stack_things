//Classes: Herança

class Person {
    age = 0; 

    constructor(name){  
        this.name = name;
    }

    //Funções:
    sayHi(){
        console.log(`${this.name} disse olá!`)
    }
}

//Um estudante, também é uma pessoa, ou seja, terá tudo que uma pessoa tem + aquilo que o estudante tem
class Student extends Person {

    constructor(name, id){
        super(name); //O Super se refere à classe pai, ou seja, "Person"
        this.id = id; //Este this se refere ao Student, this sempre se refere a própria classe
    }

    //Funções
    sayHello(){
        super.sayHi(); //A função sayHi fará exatamente a mesma coisa que o Super (código do SayHi que está dentro do pai)
    }
}

//Instâncias:
let p1 = new Student ("Luis", 201)
p1.age = 20;

let p2 = new Student ("Pedro", 200)
p2.age = 25;

console.log(`${p1.name} tem ${p1.age} anos e seu ID é #${p1.id}`);
console.log(`${p2.name} tem ${p2.age} anos e seu ID é #${p2.id}`);
p1.sayHi();
p2.sayHello();