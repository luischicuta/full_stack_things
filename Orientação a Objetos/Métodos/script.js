function animal() {
    this.raca = "";
    this.nome = "";
    this.idade = 200;
    this.peso = 10;

    this.fazerXixi = ()=>{
        console.log('Xiiiii...');
    }

    this.comer = (kg)=>{
        console.log(`Humm...`);
        this.peso = this.peso + (kg/2);
    }
}

let lulu = new animal();
lulu.raca = "gato";
lulu.nome = "Lulu";

let xuxu = new animal();
xuxu.raca = "cão";
xuxu.nome = "Xuxu";