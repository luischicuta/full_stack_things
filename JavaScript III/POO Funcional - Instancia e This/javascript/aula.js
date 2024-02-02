//Programação Funcional: Instância/Constructor e This

function createPerson(name, lastName, age){
    return {
        name,
        lastName,
        age,
        //Função dentro do objeto que vai retornar objeto.nome e objeto.lastName, usando o this
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

let person1 = createPerson('Luis', 'Chicuta', 90);
let person2 = createPerson('Junior', 'Fulanildo', 120);

console.log(person1.getFullName());