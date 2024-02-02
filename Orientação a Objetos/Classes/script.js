class Animal {

    constructor(tipo, pernas){
        this.tipo = tipo;
        this.pernas = pernas;
    }

    falar(som = 'Nenhum som Definido'){
        return som;
    }

    get dados(){
        return `tipo: ${this.tipo}, pernas: ${this.pernas}`;
    }

}

//===================================================================//

class Cachorro extends Animal {

    constructor(pele, pernas){
        super('Cachorro', pernas);

        this.pele = pele;
    }

    falar(som = 'AuAu!'){
        return som;
    }

    get cor(){
        return this.pele;
    }
}

//===================================================================//

let bicho = new Animal('Gato', 4);
let cachorro = new Cachorro('Preto', 4);

console.log(bicho.falar('Miau!'));
console.log(bicho.dados);
console.log('==================================');
console.log(cachorro.dados);
console.log(`Cor: ${cachorro.cor}`);