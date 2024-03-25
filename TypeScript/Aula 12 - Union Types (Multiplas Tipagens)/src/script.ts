/*
UNION TYPES (MÚLTIPLAS TIPAGENS)
*/

let idade: string | number = 90; //com |, diz que o valor pode ser string ou number
idade = "25";

//Exemplo em Função:
function mostrarIdade(idade: string | number){
    if(typeof idade === 'string'){
        console.log(idade.toUpperCase());
    } else {
        
    }
}

mostrarIdade(90);
mostrarIdade('90');