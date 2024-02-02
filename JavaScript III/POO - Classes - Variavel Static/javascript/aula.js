//Classes: Variável Static

class Person {

    static hands = 2; //Significa que está ligado a classe "Pessoa" mas não fará parte da instância
    age = 0; 

    constructor(name){  
        this.name = name;
    }

    sayHi(){
        console.log(`Oi, eu sou ${this.name} e tenho ${this.hands} mãos.`) //Saíra como undefined
        //Em uma variável estática, não dá pra usar o this, precisa ser classe.variavel:
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`) //Saíra corretamente
    }

}

let p1 = new Person("Luis");
p1.sayHi();