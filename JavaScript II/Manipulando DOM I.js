
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Manipulando DOM 1

function clicou(){
    const teste = document.querySelector('#teste');
    console.log(teste.children); //Vai mostrar a próxima tag dentro da DIV de ID #teste em forma de array
    console.log(teste.children[0].children) //Vai mostrar o filho do filho da DIV #teste
    const ul = teste.querySelector('ul');
    console.log('ul');
    console.log(ul.innerHTML); //Consultar elementos dentro da TAG e alterar valores
    ul.innerHTML += "<li>Item alterado</li>";
    console.log(ul.outerHTML); //Vai pegar a parte de fora da tag
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









