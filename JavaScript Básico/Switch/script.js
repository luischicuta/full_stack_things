let dia = 2;
let diaNome = '';

switch(dia){
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sabádo';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
    default:
        diaNome = 'A semana possui apenas 7 dias, coloque um numero entre 1 e 7!';
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;