let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLButtonElement;
let res = document.getElementById('resultado') as HTMLDivElement;

//Foi colocado '":number" para dizer que essa váriavel sempre será um número'
function calcular(n1: number, n2: number){
    return n1 + n2
}

botao.addEventListener('click', function() {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString(); //Colocando o "+" na frente, já diz que os valores devem ser números e também devemos converter o resultado para string pois no HTML tudo é sempre string
});

/*
Devem ser criadas duas pastas "public" e "src". Na "src" ficarão os arquivos que não ficarão vísiveis para o público, enquanto que em "public", ficaram os arquivos que poderão ser vistos pelo público, como por exemplo "index.html".

Para salvar o script.js convertido do ".ts" na pasta correta (public), usamos no CMD o seguinte comando:
"tsc src/script.ts --outDir public"

Typescrit é usado apenas para evitar que o código JS tenha erros
*/