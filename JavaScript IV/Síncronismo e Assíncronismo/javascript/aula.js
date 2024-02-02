//O que é Síncrono e Assíncrono?

/*
Sincrono = A próxima ação só será executada quando a ação anterior for executada, ela segue as linhas do código. Porém, ele segue as linhas do código em uma velocidade muito rápida, dando a impressão que tudo foi executado de uma só vez.
Exemplo:
*/

let nome = "luis";
let sobrenome = "chicuta";
let nomeCompleto = nome + sobrenome; //Dependem do valor de nome e sobrenome para funcionar
console.log(nomeCompleto);

/*
Assíncrono = A próxima ação não depende ação anterior do código.
*/

/*
Qual a utilidade dos códigos Síncronos e Assíncronos?
Usaremos o exemplo de um sistema de chat:

Um chat a grosso modo basicamente, duas ações são executadas -> Constantemente verificar se tem novas mensagens e a ação de enviar uma mensagem. 

Trabalhando de forma síncrona, seria necessário primeiro verificar se chegou uma nova mensagem e só depois disso, realizar a ação do envio da mensagem, ou vice-versa. 
Códigos síncronos podem ser usados para linhas de código que vão exigir pouco processamento, pois são executadas muito rápido.

Uma requisição é quando o JavaScript busca informações em um outro site ou API, ou seja, a solicitação passa pelos cabos submarinos da internet, chega no servidor, o servidor processa a requisição, todo esse processo pode durar de 30 a 200 milisegundos, depois de processar a requisição, ainda tem o processo de enviar uma resposta para quem solicitou a requisição, dependendo da qualidade da sua internet e de outros fatores, pode demorar mais para o código receber as informações.

Fazer requisições de formas Sincronas fará com que o código só seja executado quando ele receber a requisição. De forma Assincrona, ele pode carregar outras coisas enquanto ainda está aguardando a resposta da requisição.
*/