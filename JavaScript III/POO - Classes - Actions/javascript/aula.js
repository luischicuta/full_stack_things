//Classes: Action

class Person {

    //1 - Variáveis padrão para todos
    altura = "10 metros";
    steps = 0; //Toda pessoa por padrão terá 0 passos

    //2 - O Constructor:
    constructor(name){  
        this.name = name; //Aqui é como se fosse p1.name, mas como é um template, usamos o this. 
    }

    //3 - Ações que o objeto pode fazer
    //Função 1: Dar um passo
    takeAStep(){
        this.steps++; //Aumentará os passos
    }

    //Função 2: Setar uma idade, onde o tipo de dado só vai aceitar números
    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        }
    }
}

//Instancias:
let p1 = new Person("João"); 

p1.takeAStep(); //Deu um passo
p1.takeAStep(); //Deu dois passos
p1.setAge(10) //Setei 10 anos no João
console.log(`O ${p1.name} deu ${p1.steps} passos até agora.`) //João deu 2 passos
console.log(`${p1.name}, tem ${p1.age} anos de idade.`)