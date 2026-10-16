"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Como criar interface no typescript');
// Criar a função para receber uma variavel do tipo User (objeto) e não retornar valor.
function printUser(user) {
    console.log(`Nome de usuário: ${user.name}`);
    console.log(`CPF do usuário: ${user.cpf}`);
    console.log(`Data de nascimento do usuário: ${user.birthday}`);
}
let user1 = {
    name: 'André',
    cpf: '547.864.118-92',
    birthday: '16-11-2006'
};
printUser(user1);
//# sourceMappingURL=interface.js.map