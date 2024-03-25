var numero1 = document.getElementById('numero1'); //Vai se comportar como um input do HTML
var numero2 = document.getElementById('numero2'); //Vai se comportar como um input do HTML
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(numero1.value, numero2.value);
});
//Após criar o script em JS, copie e cole em um arquivo "".ts".
//Em seguida, faça o dito cujo se comportar como HTML para retirar os erros e posteriormente digite o comando no terminal:
//"tsc script.ts"