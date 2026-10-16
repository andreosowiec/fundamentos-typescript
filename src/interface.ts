console.log('Como criar interface no typescript')

// Criar a interface para definir a estrutura do objeto.
interface User {
    name: string;
    cpf: string;
    birthday: string;
}

// Criar a função para receber uma variavel do tipo User (objeto) e não retornar valor.
function printUser(user: User): void {
    console.log(`Nome de usuário: ${user.name}`);
    console.log(`CPF do usuário: ${user.cpf}`);
    console.log(`Data de nascimento do usuário: ${user.birthday}`);
}

let user1: User = {
    name: 'André',
    cpf: '547.864.118-92',
    birthday: '16-11-2006'
}

printUser(user1);


