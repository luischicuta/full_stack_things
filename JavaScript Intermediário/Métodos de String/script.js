let nome = 'Luis Paulo Cavalcante';

console.log(nome.length); //Mostra quantos caractéres tem na string.

console.log(nome.indexOf('Cavalcante')); //Procurar tal palavra na String. pode ser usada em if (-1 == false).

console.log(nome.slice(0, 10)); //Pega pedaços da string, colocando o numero de caractéres. se botar n° Negativo, começa a pegar de trás pra frente

console.log(nome.substring(0, 12)); //Mesma coisa do slice, mas não pega n° negativo.

console.log(nome.substr(0, 10)); //Neste, o 2° parametro é a quantidade de caractéres que vai pegar.

console.log(nome.replace('Cavalcante', 'Chicuta')); //Substitui o primeiro pelo segundo parametro.

console.log(nome.toUpperCase()); //Muda tudo pra UpperCase.

console.log(nome.toLowerCase()); //Muda tudo pra LowerCase.

console.log(nome.concat(' Chicuta')); //Concatena a String com outra string.

console.log(nome.trim()); //Tira espaços inuteis nas frases.

console.log(nome.charAt(0)); //Mostra qual letra está na posição do parametro.

console.log(nome.split(' ')); //Transforma as palavras em um array.