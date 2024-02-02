let pessoa = {
    nome: 'Luis',
    sobrenome: 'Cavalcante',
    idade: 90,
    social : {
        facebook: 'b7web',
        instagram: 'Luisspc_'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade; */

let { nome:pessoaNome, sobrenome, idade } = pessoa;

console.log(pessoaNome, sobrenome, idade);