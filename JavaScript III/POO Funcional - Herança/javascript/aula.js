//Programação Funcional: Herança

//Template de usuário padrão, que todos terão em comum:
const defaultUser = {
    name:'',
    email:'',
    permissonLevel: 1
}

//Criando o objeto adm1 usando como padrão o template do default user:
let user1 = {
    //Os 3 pontinhos vão fazer o objeto user1 herdar as propriedades do usuário default:
    ...defaultUser,
    name: 'Luis',
    email: 'luis@estudos.com.br'
}

//Criando o objeto adm1 usando como padrão o template do default user:
let adm1 = {
    ...defaultUser,
    name: 'Admin Boladão',
    email: 'adm@admboladao.com.br',
    permissonLevel: 2
}

//Vai mostrar que o user1 também tem um permissonLevel, mesmo não estando contido nas propriedades do user1:
console.log(user1)

//Vai mostrar que o adm1 com um permissonLevel diferente do objeto pai, pois definimos ele na própria instância:
console.log(adm1)