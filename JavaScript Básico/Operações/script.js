function somar() {
    let campo1 = parseInt(document.getElementById("campo1").value);
    let campo2 = parseInt(document.getElementById("campo2").value);

    let soma = campo1 + campo2;

    alert("O resultado é: "+soma);
    limpar();
}

function limpar() {
    document.getElementById("campo1").value = null;
    document.getElementById("campo2").value = null;
}

// sinal de multiplicação é *;
// sinal de divisão é /;