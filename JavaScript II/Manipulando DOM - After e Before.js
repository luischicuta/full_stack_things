
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Manipulando DOM 2 (After e Before)

function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

//const newButton = document.createElement('button') //Criando elemento "button" no HTML
//newButton.innerHTML = "Botão";

//AFTER = DEPOIS
//BEFORE = ANTES

   // ul.before(newButton); //Vai adicionar um elemento antes da TAG ul
   //ul.after(newButton); //Vai adicionar um elemento após a TAG ul
    

    //Criando nova li, até no máximo 5
    let newUl = document.createElement('ul');
    for(let i=0;i<5;i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = "item add " + 1;
        newUl.append(newLi);
        newUl.append();
    }
    
    ul.after(newUl); //Mostrando na tela a nova ul
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









