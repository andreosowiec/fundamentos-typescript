console.log("Como criar função!");

// Criar a função para receber duas variaveis do tipo string e retornar a string.
function getUser(name: string, lastName: string): string {
    return `${name} ${lastName}`;
}
// Chamar a função e imprimir o valor
console.log(getUser("André", "Osowiec"));

// Criar a função para receber duas variaveis do tipo numero e retornar um numero.
function getSpeed(current: number, add: number): number {
    return current + add;
}
// Chamar a função e imprimir o valor
console.log(getSpeed(18,20));

// Criar a função para receber uma variavel do tipo numero e retornar um boolean.
function getSituation(current: number): boolean {
    return(current >= 7 ? true : false);
}
// Chamar a função e imprimir o valor
console.log(getSituation(5));

// Criar função para receber uma variavel do tipo any e retornar uma string
function getValue(value: any): string {
    if (typeof value === "string") {
        return "Valor do tipo string.";
    } else {
        return "Valor diferente de string.";
    }
}

// Chamar a função e imprimir o valor
console.log(getValue("bom dia"));

//Criar função para receber uma variavel do tipo string ou number e retornar uma string
function getType(valueType: string | number): string {
    if (typeof valueType === "string") {
        return "Valor do tipo string";
    } else {
        return "Valor do tipo número";
    }
}
// Chamar a função e imprimir o valor
console.log(getType(26));