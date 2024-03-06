//Segue abaixo os tipos de métodos/funções que temos no Puppeteer:
//Métodos:

snapshot(options); //Vai capturar o estado atual da Arvore de Acessibilidade, o objeto retornado representa o root acessível do node da página
browserContexts() //Retorna o contexto do navegador;
close() //Fecha o navegador
createBrowserContext(options) //Cria um novo contexto no Browser
defaultBrowserContext() //Pega o contexto padrão do navegador
disconnect() //Desconecta o Puppeteer do navegador em questão
isConnected() //Boolean - Para verificar se o Puppeteer está conectado ao navegador
newPage() //Cria uma nova página no navegador
pages() //Retorna uma lista de todas as páginas abertas no navegador
process() //Mostrará Childs associadas ao processo, ou seja, elementos que herdam processos do elemento pai
target() //Retorna o alvo padrão do navegador
targets() //Retorna todos os alvos ativos
userAgent() //Pega o usuário original do navegador, pode ser alterado com Page.setUsarAgent()
version() //Vai mostrar o nome e número da versão do navegador
waitForTarget(predicate, options) //Espera até o alvo retornar um informação e a salva na memória
wsEndpoint() //Pega a URL do WebSocket para conectar ao navegador 
browser() //Seleciona o navegador
clearPermissionOverrides() //Limpa todas as permissões do navegador
close() //Fecha o navegador
newPage() //Abre uma nova guia do navegador
pages() //Mostra todas as páginas abertas
connection() //Boolean, validar a conexão
id() //Retorna o ID da sessão
url() //Pega a URL
session(sessionId) //Define o ID da sessão
text() //Mostra o texto no console
cancel() //Cancela o comando definido no Prompt
autofill(data) //Vai preencher um input com o que está definido na função
boundingBox() //Vai mostrar blocos de DIV com display:none
boxModel() //Vai mostrar DIVs com display:none
click() //Clica no elemento
focus() //Vai focar em um elemento do DOM
isHidden() //Boolean, verifica se existe determinado elemento escondido na página, usado por exemplo quando é acrescentado a class ".sucess" em uma div, quando a página web termina de carregar
isVisible() //Boolean, verifica se existe determinado elemento escondido na página, usado por exemplo quando é acrescentado a class ".sucess" em uma div, quando a página web termina de carregar
press(key, options) //Foca em um elemento e aperta com uma tecla usando a função keydown do JS
screenshot(otions) //Tira uma print da tela do navegador
scrollIntoView(this) //Vai rodar o mouse até o elemento
tap(this) //Mesma coisa do click ou press, porém é usado para telas TouchScreen
type(text, options) //Mesma coisa do press, porém ao invés de keydown vai mandar um keydown e keyup
uploadFile(this, paths) //Faz upload de um elemento em um input de arquivo
waitForSelector(selector, options) //Vai esperar determinado elemento, que pode ser uma class, aparecer na tela, para fazer algo
listenerCount(type) //Pega o número de event listeners na página
off(type, handler) //Desativa um event listerner específico
on(type, handler) //Ativa um event listener específico
once(type, handler) //Vai executar o event listener apenas uma vez e depois ele é deletado
removeAllListeners(type) //Remove todos os event listeners da página
addScriptTag(options) //Adiciona uma tag <script> na página HTML, onde poderemos acrescentar um código JS
addStyleTag(options) //Adiciona uma tag <style> na página HTML, onde poderemos acrescentar um código CSS
click(selector, options) //Vai clicar no primeiro elemento que encontrar com essa classe
content() //Retorna toda a estrutura da página, até mesmo o DOCTYPE
focus(selector) //Vai focar no elemento que possui determinada classe especifica
goto(url, options) //Vai para uma URL específica
hover(selector) //Vai mover o mouse até o elemento que contenha determinada classe específica
locator(selector) //Vai localizar a div que tem determinada classe específica
name() //Altera ou pega o atributo "name" de uma TAG HTML
tap(selector) //Vai selecionar determinada tag com uma determinada Class em um aparelho TouchScreen
title() //Altera ou pega o atributo "title" de uma TAG HTML
waitForFunction(pageFunction, options, args) //Vai aguardar uma função especifica ser executada para realizar a linha de código
waitForNavigation(options) //Aguarda a página navegar para determinado elemento (por exemplo por um anchor) para realizar a linha de código
start(options) //Inicia determinado processo
stop() //Para determinado processo
getProperties() //Pega as propriedades de um elemento da página HTML
down(key, options) //Executa a função keydown do teclado
press(key, options) //Executa a função keydown e em seguida keyup do teclado
sendCharacter(char) //Vai escrever algum caractére sem acionar evento de teclado
type(text, options) //Vai digitar aos poucos, como se fosse uma pessoa digitando
up(key) //Aciona o evento keyup do teclado
click(x, y, options) //Move o mouse para uma coordenada específica na tela e em seguida clica
down(options) //Pressiona o botão esquerdo do mouse
up(options) //Solta o botão do mouse
move(x, y, options) //Move o mouse para uma coordenada específica na tela
reset() //Reseta a posição do mouse
wheel(options) //Pressiona a roda do mouse
browser() //Seleciona o navegador