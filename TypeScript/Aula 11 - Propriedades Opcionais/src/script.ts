/*
PROPRIEDADES OPCIONAIS
*/

//Colocamos "?" ao lado do atributo do objeto, para que dessa forma, seja opcionou preencher este parâmetro, ou seja nesse caso, será obrigatório ter pelo menos o nome:
function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined){
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    } else {
        return `Olá ${usuario.nome}, tudo bem?`
    }};

//Implementação da Função:
let u = {
    nome: 'Luis',
    
}
resumo(u);