/*
DOM = Document Object Model
Cada TAG do HTML é um DOM.

Manipulação de DOM = alterar elementos dentro das TAGs HTML.
*/

//document = objeto (Edita o conteudo da página Web);
//Window = objeto (Edita o conteúdo da janela do navegador);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Seletores HTML/JS:
document.getElementsByTagName("h1") //Pegar os elementos pelo nome da TAG HTML - Retorna um array com todos os h1 da tela
document.getElementById("teste"); //Pegar o elemento pelo ID. Cada ID deve ser único para cada tag HTML
document.getElementsByClassName("botao") //Pegar elementos da mesma classe
document.querySelector("#teste"); //Pegar pelo ID
document.querySelector(".botao") //Pegar pela class
document.querySelector("h1") //Pegar 1° elemento com a tag h1
document.querySelector("li") //Pegar o 1° elemento com a tag li
document.querySelectorAll("li") //Pegar todos os elementos com tag li (Sempre retorna um Array)
document.querySelectorAll("#teste ul li") //Vai pegar o "li" dentro da "ul" que está dentro do ID "#teste"
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EVENTOS DE CLICK
//Evento = Quando algo acontece
//Ocorre quando a tag possui o complemento onclick="clicou()"
function clicou(){
    console.log("Clicou no botão!");
}

let botao = document.querySelector('.botao');
//botao.addEventListener("tipoDeEvento", NomeDaFunção)
botao.addEventListener("click", ()=>{
    clicou();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








