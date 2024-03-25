/*
TIPAGEM EM OBJETOS
*/

//Quando estiver trabalhando com objetivos, é NECESSÁRIO SEMPRE definir o tipo dos dados para cada caracteristica do objeto:
function resumo(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}

//Implementação da Função:
let u = {
    nome: 'Luis',
    idade: 90
}
resumo(u);