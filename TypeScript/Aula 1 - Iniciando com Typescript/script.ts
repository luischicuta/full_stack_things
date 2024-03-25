let numero1 = document.getElementById('numero1') as HTMLInputElement; //Vai se comportar como um input do HTML
let numero2 = document.getElementById('numero2') as HTMLInputElement; //Vai se comportar como um input do HTML
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1, n2){
    return n1 + n2
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular(numero1.value, numero2.value);
});

/*
Após criar o script em JS, copie e cole em um arquivo "".ts". Em seguida, faça o dito cujo se comportar como HTML para retirar os erros e posteriormente digite o comando no terminal (CMD): "tsc script.ts".
Será gerado um novo arquivo identico ao JS anterior, mas com a certeza de que a sintaxe estará correta.
*/