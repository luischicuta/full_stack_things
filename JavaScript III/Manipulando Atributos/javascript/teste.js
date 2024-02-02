
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Manipulando Atributos de um input

function clicou(){
    const input = document.querySelector('input');

    console.log(input.getAttribute('type')) //Vai mostrar qual o tipo de input, através do elemento type
    console.log(input.getAttribute('placeholder')) //Vai mostrar o que está escrito no placeholder
    
    //.hasAttribute == Verifica se possui tal atributo, por exemplo:

    if(input.hasAttribute('placeholder')){ //Verificação para saber se o input possui o atributo placeholder
        console.log('Tem placeholder SIM');
    }

    
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funções:

// getAttribute('type') = Vai mostrar os atributos do input (text, password, etc)
// hasAttribute('nomeDoAtributo') = Identifica se tem ou não o atributo na tag
// setAttribute('nomeDoAtributo', 'NovoAtributo') = Vai setar ou alterar o atributo da tag
//OBS:. Não dá pra usar setAttribute em value, precisa ser Elemento.value = "String"

//Exemplo de Ocultar/Mostrar senha:
function clicou() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');
    
    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar Senha";
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar Senha";
    }
}






