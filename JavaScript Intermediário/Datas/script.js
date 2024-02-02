let d = new Date(); //Pega a data atual do dispositivo.

console.log(d);

console.log(d.toDateString()); //Retorna somente a data, sem horário.

console.log(d.toUTCString()); //Pega a data e o horário do Greenwich.

console.log(d.toString()); //Transforma a data em string.


// let d = new Date(ano, mês(começa do 0), dia, hora, minutos, segundos);   << Parametros.
//Exemplo:

let d2 = new Date(2020, 0, 13, 12, 33, 00);

console.log(d2);

//Também poderia ser dá seguinte maneira:

let d3 = new Date('2020-01-13 12:33:00');

console.log(d3);