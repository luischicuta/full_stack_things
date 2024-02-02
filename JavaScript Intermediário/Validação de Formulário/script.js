function validar(){
    let valor = document.getElementById("input").value;

    if(valor.length > 2){
        alert("Você digitou um número que tem mais de 2 algarismos!");
        return false;
    } else {
        return true;
    }
}