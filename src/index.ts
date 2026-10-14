// Variável do tipo string.
const name: string = "André";
console.log(`Nome: ${name}`);

// Variável do tipo number.
const age: number = 20;
console.log(`Quantidade: ${age}`);

// Criar variável do tipo boolean.
const situation: boolean = true;
console.log(`Situação: ${situation}`);

// Criar variável do tipo array de string
const courses: string[] = ["Curso de React", " Curso de JavaScript", " Curso de SQL."];
console.log(`Cursos: ${courses}`);

// Criar variável do tipo array de número
const amount: number[] = [4, 5, 9, 15];
console.log(`Quantidade: ${amount}`);

// Criar variável do tipo "tuple" array com tipos diferentes
var user: [string, number, boolean];
user = ["André", 19, true];
console.log(`Usuário: ${user[0]}`);
console.log(`Idade: ${user[1]}`);
console.log(`Situação: ${user[2]}`);

// Criar variável do tipo enum. Representa um conjunto de valores nomeados.
enum DayOfTheWeek {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
};
console.log(`Dia da semana: ${DayOfTheWeek.Friday}`);

// Criar variável do tipo any, atribuir qualquer tipo de valor para a variável
let data: any;
data = 10; // Atribuir um valor do tipo número.
console.log(`O valor atribuído é um número: ${data}`);
data = "Olá!"; // Atribuir um valor do tipo string.
console.log(`O valor atribuído é uma string: ${data}`);

// Criar variável do tipo null e undefined
let variableNull: null = null;
let variableUndefined: undefined = undefined;
console.log(`Variável nula: ${variableNull}`);
console.log(`Variável indefinida: ${variableUndefined}`);

// Criar variável do tipo object 
    // A interface define o contrato do objeto
interface Client {
    name: string;
    age: number;
    situation: boolean;
}
    // A variável usa o contrato da interface Client
const client1: Client = {
    name: "André",
    age: 19,
    situation: true
};
console.log(`Nome do cliente: ${client1.name}`);
console.log(`Idade do cliente: ${client1.age}`);
console.log(`Situação do cliente: ${client1.situation}`);

const client2: Client = {
    name: "João",
    age: 25,
    situation: false
};
console.log(`Nome do cliente: ${client2.name}`);
console.log(`Idade do cliente: ${client2.age}`);
console.log(`Situação do cliente: ${client2.situation}`);

// Criar variável utilizando union indicando um ou mais tipo
const value: string | boolean = false;
console.log(`Valor pode ser string ou boolean: ${value}`);