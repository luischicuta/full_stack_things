let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function() {
        this.ligado = true;
        console.log("Ligando o "+this.modelo);
        console.log("VRUM! VRUM!");
    },
    acelerar:function() {
        if(this.ligado == true) {
        console.log("Riiiiiihhhhhih");
        } else {
            alert(this.nome+" "+this.modelo+" está desligado!");
        }
    }
};

// Objetos também podem ser colocados dentro de um Array.