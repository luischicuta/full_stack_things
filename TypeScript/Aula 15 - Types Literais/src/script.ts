/*
Types literais
*/

//O type já recebe um valor predeterminado e se for qualquer outro valor, vai dar erro no TS
//O alinhamento pode receber um left, ou um right, ou um center:
function mostrarTexto(
    texto: string, alinhamento: 'left' | 'right' | 'center') {
        return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}

mostrarTexto('Chicuta', 'left');

//Exemplo 2:
//Criei meu próprio tipo
type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes | 'auto'){
    // ....
}

configurar({width: 100, height: 200});
configurar('auto');














