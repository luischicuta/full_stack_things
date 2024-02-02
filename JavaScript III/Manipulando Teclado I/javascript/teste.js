//Eventos de Teclado

function apertou(){
    console.log("APERTOU!");
}

function segurou(){
    console.log("SEGUROU!");
}

function soltou(){
    console.log("SOLTOU!");
}

document.addEventListener('keydown', apertou); //Aciona sempre que pressionar qualquer tecla
document.addEventListener('keypress', segurou); //Aciona sempre que pressionar continuamente qualquer tecla
document.addEventListener('keyup', soltou); //Aciona quando qualquer tecla apertada é desapertada