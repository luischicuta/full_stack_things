function fazer(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('OK');
        }, 3000);
    });

    return promise;
}

fazer().then((resposta)=>{
    console.log('Resposta: '+resposta);
});


//Promise é como se fosse um loading!