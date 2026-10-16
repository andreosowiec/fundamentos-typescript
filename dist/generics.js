"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criar função definida com o parâmetro array do tipo [T], onde T é um tipo genérico.
// A função pode trabalhar com qualquer tipo de array.
function printArray(fruits) {
    // Percorrer o array de dados
    for (let fruit of fruits) {
        // Imprimir os dados do item do array
        console.log(fruit);
    }
}
// Criar array com valores do tipo string.
let nameFruitsArray = ['Laranja', 'Mamao', 'Acai', 'Abacaxi'];
// Criar array com valores do tipo number.
let amountFruitsArray = [20, 5, 12, 7];
// Chamar a função e imprimir o array de string como parâmetro 
printArray(nameFruitsArray);
// Chamar a função e imprimir o array de numeros como parâmetro 
printArray(amountFruitsArray);
//# sourceMappingURL=generics.js.map