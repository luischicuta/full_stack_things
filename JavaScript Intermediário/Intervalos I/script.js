let timer;

function comecar(){
    timer = setInterval(showTime, 1000); //1°P a função que quer que tenha intervalo de execução 2°P Tempo em Milisegundos.
}

function parar(){
    clearInterval(timer);  //Cancela a execução do código do intervalo.
}

function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}

