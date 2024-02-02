//Exercício: LISTA DE TAREFAS

//Elementos
const input = document.querySelector('input'); //Tag input
const list = document.querySelector('ul'); //Tag ul

//Funções
let handleKeyUp =(e)=> {
    if(e.key === 'Enter'){
        let text = input.value;
        list.innerHTML += `<li>${text}</li>` //Adiciona a tag <li> na lista
        input.value = " "; //Após adicionar o item, vai limpar o input
    }
}

//Eventos
input.addEventListener('keyup', handleKeyUp); //Sempre que ele identificar que a tecla foi up, vai executar a função handleKeyUp