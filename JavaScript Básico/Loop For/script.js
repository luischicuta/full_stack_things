//=================================================================================
//FOR LOOP

for(let i = 0; i <= 10; i++){                    //(Variavel Auxiliar;Condição;Incremento)
    document.write("O numero é "+i+"<br/>");
}

//Outro Exemplo:
/* let texto = '';

for(let i = 0; i <= 10; i++){
    texto = texto + i + '<br/>';
}

document.getElementById("demo").innerHTML = texto; */


//=================================================================================
//FOR ARRAY

let carros = [ 'Ferrari', 'Fusca', 'Palio', 'Corolla' ];

let html = '<ul>';

for(let i in carros){
    html += '<li>'+carros[i]+'</li>';
}

html += '</ul>';

document.getElementById('array').innerHTML = html;