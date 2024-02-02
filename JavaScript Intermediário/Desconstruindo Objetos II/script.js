let pessoa = {
    nome: 'Luis',
    sobrenome: 'Cavalcante',
    idade: 90,
    social : {
        facebook: 'face',
        instagram: {
            url: '@luisspc',
            seguidores: 1000
        }
    }
};

/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade; */

function pegarNomeCompleto(obj){
    return obj.nome+' '+obj.sobrenome;
}

let { social: { instagram: {url:instagram, seguidores}} } = pessoa;

console.log( pegarNomeCompleto(pessoa), instagram, seguidores);

