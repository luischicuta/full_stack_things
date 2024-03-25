/*
CONTEXTUAL TYPING EM FUNÇÕES ANONIMAS
*/

//Se em um array tiver apenas dados String, o Typescript vai automáticamente definir o tipo da váriavel como sendo string[].

let names = ['luis', 'paulo', 'chicuta','cavalcante'];
names.forEach(function(nome){
    console.log(nome.toUpperCase());
});