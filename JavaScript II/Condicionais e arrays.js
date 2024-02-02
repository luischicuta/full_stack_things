/*Exercicio Condicionais*/
console.log("================================") 
////////////////////////////////////////
let x = 10;
let y = 5;
console.log(x > y)
////////////////////////////////////////
let w = "10";
let z = 10;
console.log(w === z);
////////////////////////////////////////
let a = 10;
let b = 5;
console.log(a != b)
////////////////////////////////////////
let preco = 40.3;
if(preco <= 45 && preco >= 0){
    console.log("Está barato!")
}else{
    console.log("Está caro!")
}
////////////////////////////////////////
/*Condicional Ternário (Uma linha só)*/
console.log("================================")
let isMember = true;
const name = "Chicuta";
let age = 23;
let isAdult = (age >=18 ? "maior de 18" : "menor de 18");
let shipping = (isMember ? "gratuito" : "pago");
let sign = (isMember ? "assinante" : "não assinante");

console.log(`O senhor ${name} é ${sign} e ${isAdult}, portanto o frete será ${shipping}.`);

console.log("================================")
////////////////////////////////////////
/*Retorno da Função*/
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Luis", "Chicuta")
console.log(`Nome Completo: ${completo}`);

// ENTRADA DE DADOS => PROCESSAMENTO => SAIDA //

console.log("================================")
////////////////////////////////////////
/*Retorno da Função Condicional*/
//Após return nada mais é executado na função, a menos que esteja dentro de uma condicional. O return é o resultado.

function maiorDeIdade(idade) {
    if(idade >= 18){
        return true;
    }else{
        return false; 
    }
}

let newIdade = 65;
let verificacao = maiorDeIdade(newIdade);
if(verificacao){
    console.log(`Você tem ${newIdade} anos, portanto é maior de idade.`)
}else{
    console.log(`Você tem ${newIdade} anos, portanto é menor de idade.`)
}
console.log("================================")
////////////////////////////////////////
/*Exercicios de Função I*/
/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10.
Fórmula da Porcentagem: (y / x) * 100
uso da função:
*/

let calcPct =(n1, n2)=>{
    let pct = (n2 / n1) * 100;
    return pct;
}


let value1 = 40;
let value2 = 10;
let pct = calcPct(value1, value2);
console.log(`${pct}% de ${x} é ${y}.`)

console.log("================================")
////////////////////////////////////////
/*Exercicios de Função II*/
/*

Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é x1;
- Se tiver 2 quartos, o m2 é 1.2x
- se tiver 3 quartos, o m2 é 1.5x

Uso da Função:
*/

let calcImovel = (metragem, quartos)=>{
    let m2 = 3000;
    let precoImovel = 0;

    switch(quartos){
        case 1:
        default:
            precoImovel = metragem * m2;
            break
        case 2:
            precoImovel = metragem * (m2 * 1.2);
            break
        case 3:
            precoImovel = metragem * (m2 * 1.5);
            break
    }
    return precoImovel;
}

let metragem = 10;
let quartos = 2;
let calcPreco = calcImovel(metragem, quartos);
console.log(`O preço da casa é ${calcPreco}`);
console.log("================================")
////////////////////////////////////////
/*Exercicios de Função III*/
/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

let validarLogin = (user, senha)=>{

    if(user == "Pedro" && senha == 123){
        return true;
    }else {
        return false;
    }
}

//Uso da Função:
let user = 'Pedro' //Usuário correto
let senha = '321' //Senha errado
let validacao = validarLogin(user, senha);
if(validacao){
    console.log(`Login Efetuado com Sucesso!`)
}else{
    console.log('Acesso NEGADO!')
}
console.log("================================")
////////////////////////////////////////
/*Variável de Escopo Global (Criada Fora da Função)*/
let contagem = 0

let add =()=>{
    contagem++;
}

add();
add();

console.log(contagem);
console.log("================================")
////////////////////////////////////////
/*Variável de Escopo Local  (Criada dentro da Função)*/

let contagem2 = 0; //Escopo Global
let add2 =()=>{
    let contagem2 = 0; //Escopo Local
    contagem2++;
}

add2();
add2();

console.log(contagem2);
console.log("================================")
////////////////////////////////////////
/*Funções dentro de Funções*/
//Calc Raíz Quadrada:
function addSquare(a, b){
    let square=(x)=>{
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquare(2, 3));

//DICA: Usar Function para a principal e dentro usar ArrowFunctions
console.log("================================")
////////////////////////////////////////
/*Array*/
let colors = ["blue","red","green"]; //Array normal
console.log(colors);
console.log(`O número 0 é: ${colors[0]}`);
console.log(`O número 1 é: ${colors[1]}`);
console.log(`O número 2 é: ${colors[2]}`);
console.log(`Sempre começa do número 0!`);
let lista = ['blablabla', ['xx','yy']]; //Array dentro de array
console.log(lista[1][0]);
console.log("================================")
////////////////////////////////////////
/*Operações com Array*/
let bolo = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];

//bolo.pop(); // Vai apagar o último item do array;
//bolo.shift() //Vai apagar o primeiro item do array;

bolo.push('cebola'); //Adicionar novo item no Array;
console.log(bolo);
console.log(`Total de ingredientes do Bolo: ${bolo.length}`) //Qntd de items no Array;
console.log(`Foi adicionado ${bolo[5]} ao bolo!`);
console.log("================================")
////////////////////////////////////////
/*Exercícios Array I*/

//1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'FERRARI', 'MERCEDES'];
let ii = 1
console.log(`1. ${carros[ii]}`);
console.log("================================")
//2. Troque a Ferrari por Audi

console.log(`2. Lista com Audi:`);
carros[1] = "Audi";
console.log(carros);
console.log("================================")
//3. Adicione o Volvo a lista
carros.push(`Volvo`)
console.log(`3. Lista com Volvo:`);
console.log(carros);
console.log("================================")
//4. Exiba quantos itens tem no array

console.log(`4. itens no array: ${carros.length}`)
console.log("================================")
////////////////////////////////////////
/*OBJETOS*/

let personagem = {
    nome: 'Chicuta',
    idade: 90,
    pais: 'Brasil',
    skills:{
        forca: 10,
        magia: 5,
        vida: 20
    },
    olhos: ['Preto','Azul']
}
console.log(`O personagem se chama ${personagem.nome} tem ${personagem.idade} e vive no país ${personagem.pais}. Sua força é LvL ${personagem.skills.forca}, sua magia é LvL ${personagem.skills.magia} e seu LvL de vida é ${personagem.skills.vida}. A cor dos olhos dele é ${personagem.olhos[0]}.`)
console.log("================================")
////////////////////////////////////////
/*ACESSANDO E ALTERANDO OBJETOS*/
let char = {
    nome: 'Chicuta',
    idade: 900,
    pais: "Skyrim",
    olho: ['preto','azul'],
    atributos: {
        forca: 10,
        energia: 10,
        vida: 10,
        stamina: 15
    }
}
char.nome = "Pedrinho";
console.log(char.nome);
console.log("================================")
char.atributos.forca += 5; //Aumentando em 5
console.log(`Força: ${char.atributos.forca}`);
char.olho.push('Verde'); //Adicionando a cor verde ao array, usando a função push()
console.log(char.olho[2]) //Chamando a cor verde.
console.log("================================")

let lojaCarros = {
    carros: [
        {modelo:'fiat', color:'preto'},
        {modelo: 'Ferrari', color:'vermelho'}
    ]
}
console.log(`O carro é do modelo ${lojaCarros.carros[0].modelo} com cor ${lojaCarros.carros[0].color}.`)
console.log("================================")
////////////////////////////////////////
/*FUNÇÕES DENTRO DE UM OBJETO*/

let pessoa = {
    nome: 'Luis',
    sobrenome:'Chicuta',
    idade: 90,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}` //'This' equivale neste caso ao próprio objeto pai "pessoa". Se usar Arrow Function, não vai conseguir acessar o 'This'.
    }
}
console.log(pessoa.nomeCompleto());
console.log("================================")
////////////////////////////////////////
/*LOOPs*/
//for(inicio;condicional;incremento){}
for(let n = 1;n <= 10;n++){
    console.log(`Frase Qualquer ` + n);
}
console.log("================================")
////////////////////////////////////////
/*LOOP em Arrays*/
let colorList = ['preto','branco','azul','vermelho'];
for(let cl = 0;cl < colorList.length;cl++){
    console.log(colorList[cl])
}
console.log("================================")
for(let cl2 in colorList){ //in = em
    console.log(colorList[cl2])
}
console.log("================================")
for(let cl3 of colorList){ //of = de
    console.log(cl3)
}
console.log("================================")
let otherColors = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
];
for(cor of otherColors){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}
console.log("================================")
////////////////////////////////////////
/*LOOP While*/
let number = 0;
while(number <= 10){
    console.log(`O número da vez é ${number}`);
    number++;
}
console.log("================================")
////////////////////////////////////////
/*Exercício de LOOPs*/

//1. Faça um loop que mostre todas as frutas
let fruits = ['Maça','Uva','Banana'];
for(let ff in fruits){
    console.log(fruits[ff]);
}
console.log("================================")
//2. Conte de 1 até 100 através de um WHILE
let init = 1;
while(init <= 100){
    console.log(init)
    init++;
}
console.log("================================")
let salada = ['Maça','Uva','Laranja','Banana'];
console.log(`Eu tenho ${salada.length} itens no meu Array.`);
salada.push('Kiwi'); //Adicionar
console.log("================================")
console.log(`Agora eu tenho ${salada.length} itens no meu Array.`);
console.log("================================")
salada.pop(); //Deleta o último do Array
console.log(`Agora eu tenho ${salada.length} itens novamente.`);
console.log("================================")
salada.shift() //Deleta o primeiro do Array
console.log(`Agora eu tenho ${salada.length} itens.`);
console.log("================================")
let separador = salada.join('-'); //Separador que vai retornar uma string
console.log(separador);
console.log("================================")
console.log(`O primeiro item é ${salada[0]}`);
console.log("================================")
salada[0] = 'Pera'; //Alterar valor de um index do Array
console.log(`Agora o primeiro item é ${salada[0]}.`);
console.log("================================")
console.log(`O ultimo item do meu array é ${salada[2]}`);
console.log("================================")
salada[salada.length - 1] = "Maçã" //Mesma coisa do pop(), mas consome menos processamento pois só vai alterar o ultimo
console.log(`Agora minha última fruta é ${salada[2]}`)
console.log("================================")
////////////////////////////////////////
/*Ordenação de Arrays*/
let alfebt = ['Danilo','Arthur','Carlos','Bruno'];
console.log(`Os nomes são ${alfebt.join(', ')}.`)
console.log("================================")
console.log(`Agora os nomes são ${alfebt.sort()}.`);
console.log("================================")
console.log(`Agora a sequência é ${alfebt.sort().reverse()}.`) //Inverter em ordem alfabética
console.log("================================")
let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]
cars.sort((ca, cb)=>ca.year - cb.year) // Colocar objetos em ordem alfabética
console.log(cars)
console.log("================================")
////////////////////////////////////////
/*Iteração de Arrays*/
let fruits2 = ['Banana','Laranja','Maça','Pera','Uva'];
let bigFruits = fruits2.filter((item)=> item.length > 4); //Só vai retornar strings com mais de 4 caracteres
console.log(bigFruits);
console.log("================================")
let ok = fruits2.every((value)=>{ ///Every = TODOS //Se TODOS forem maior que 3, retorna true, se não, retorna false
    return value.length > 3;
});

if(ok){
    console.log(`Todos são maior que 3`);
}else{
    console.log(`Não são maior que 3.`);
}
console.log("================================")
let kk = fruits2.some((value)=>{ ///Some = ALGUM, se pelo menos um item for maior que tres, retorna true
    return value.length > 3; 
});

if(kk){
    console.log(`Algum item é maior que 3`);
}else{
    console.log(`Nenhum item é maior que 3.`);
}
console.log("================================")
if(fruits2.includes('Uva')){ ///Verifica se inclui tal elemento no ARRAY
    console.log('Tem uva sim!');
}
console.log("================================")















