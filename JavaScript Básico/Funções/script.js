function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

// no console digite, para ativar: alterar("novo valor!"); 

//=====================================================================================================// 


function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(15, 10);

console.log(resultado);
