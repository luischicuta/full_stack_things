fetch('https://alunos.b7web.com.br/api/ping')
    .then((r)=>r.json())
    .then((json)=>{
        console.log(json);
    });