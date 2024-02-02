// São comando para selecionar elementos!
// Por exemplo, quero mexer no elemento com class="lista",
// basta selecionar com:

document.querySelector('.lista');

//caso existam tags diferentes como OL e UL usando a mesma class, você pode selecionar somente a que você quer!

document.querySelector('ol.lista');

// Você também pode selecionar itens que tenham um id! Por exemplo:

document.querySelector('#titulo');

// Com isso você até pode MUDAR o conteudo do titulo, por exemplo:

document.querySelector('#titulo').innerHTML = "Novo Titulo!";

// O queryselector vai selecionar somente o primeiro elemento que encontrar! 
// o QuerySelectoAll vai selecionar todos os elementos iguais, por exemplo:

document.querySelectorAll('li');