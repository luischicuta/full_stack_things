//Classes: Setter e Getter

class Person {

    //1 - Variáveis padrão para todos
    _age = 0;
    steps = 0; 

    //2 - O Constructor:
    constructor(firstName, lastName){  
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //3 - Ações que o objeto pode fazer
    //Função 1: Dar um passo
    takeAStep(){
        this.steps++; 
    }

    //4 - Getters e Setters são como funções que retornam algo
    get age() {
        return this._age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set age(x){
        if(typeof x == 'number'){
            this._age = x;
        }
    }
}

//Instancias:
let p1 = new Person("João", "Silva"); 

p1.age = 20;
console.log(`${p1.fullName}, tem ${p1.age} anos de idade.`)