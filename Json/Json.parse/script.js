//String do JSON '{"nome": "Luis", "idade": 22}'
// JSON.parse() transforma um JSON string em um Json (Objeto)

let pessoa = JSON.parse('{"nome": "Luis", "idade": 22}');
console.log(pessoa.nome);
console.log(pessoa.idade);