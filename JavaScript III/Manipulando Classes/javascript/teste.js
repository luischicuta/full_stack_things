//Trabalhando com Classes

//Vai mostrar todas as classes dentro da tag button
function clicou(){
    const button = document.querySelector('button');
    console.log(button.classList); 
}

//Adicionar uma nova classe ao elemento
function clicou(){
    const button = document.querySelector('button');
    button.classList.add('NomeDaClass') //Função
}

//Remover uma classe do elemento
function clicou(){
    const button = document.querySelector('button');
    button.classList.remove('NomeDaClass') //Função
}

//Verificar se o elemento possui determinada class
function clicou(){
    const button = document.querySelector('button');

   if(button.classList.contains('NomeDaClass')){
    button.classList.add("NovaClass") //Função
   }
}

//Adicionar ou remover uma class
function clicou(){
    const button = document.querySelector('button');
    button.classList.toggle('NomeDaClass') //Função
 }

//Trocar uma Classe por Outra
function clicou(){
    const button = document.querySelector('button');
    button.classList.replace('NomeDaClassAtual', 'NomeClassNova'); //Função
 }