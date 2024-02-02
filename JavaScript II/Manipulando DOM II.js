
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Manipulando DOM 2

function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    ul.children[0].append("(Alterado)") //Selecionando o primeiro li do ul, append serve para adicionar um conteudo ao conteudo que já existe, sem remove-lo (Só funciona para texto).
    
    //--------------------------------------------------------------------//

    let newLi = document.createElement("li"); //Criando um elemento TAG
    newLi.innerText = "Item adicionado"; //Adicionando um texto ao elemento TAG criado

    ul.appendChild(newLi); //Adiciona ao HTML o elemento que criamos

    let newLi2 = document.createElement("li");
    newLi2.innerText = "Mais um item!";
    ul.prepend(newLi2) //Adicionando texto/elemento no começo

/*
append = adicionar texto, no final
appendChild = adicionar elemento e texto no final
prepend = adicionar texto, no começo
*/
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









