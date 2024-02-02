//Eventos de Teclado II

function soltou(e){
    console.log(e.code); //Mostra o código exato da Tecla que foi soltada
    console.log(e.key); //Mostra o nome (Todos os Shift viram só Shift) da Tecla que foi soltada
    console.log(e.shiftKey) //Retornará um boolean de verdadeiro ou falso se a tecla pressionada for o Shift ou não
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);