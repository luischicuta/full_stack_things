//Programação Funcional: Constructor

//Objeto criado diretamente na variável:
let person = {
        name: 'Luis',
        lastName: 'Chicuta',
        age: 90,
        getFullName() {
            return `${this.name} ${this.lastName}`
        },
        //Bootstrap (Primeira Função executada em um código):
        //Constructor: 
        start(){
            console.log(`Deu start na pessoa`);
        }
    }

person.start();
console.log(person.getFullName());