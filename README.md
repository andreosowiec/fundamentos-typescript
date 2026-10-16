## Projeto: Fundamentos TypeScript

Este projeto foi desenvolvido com o objetivo de aprender e consolidar os fundamentos da linguagem TypeScript.

## Requisitos do projeto

Verificar a versão do Node.js: v24.19 ou superior
```
node -v
```

## Como rodar o projeto baixado

Instalar as dependências indicadas pelo arquivo package.json
```
npm install
```
## Sequência para a criação do projeto

Criar o arquivo package.
```
npm init
```

Instalar o TypeScript como dependência de desenvolvimento
```
npm install --save-dev typescript
```

Criar o arquivo tsconfig.json.
```
npx tsc --init
```

## Configurar o arquivo tsconfig.json.

Adicionar/descomentar as linhas com os comandos:
   ``` 
    "rootDir": "./src",
    "outDir": "./dist",
    
    "lib": ["esnext"],
    "types": ["node"],
   ```

*apagar a linha vazia que restou "types": [], para não dar erro de duplicação.

Adicionar o include na raiz do arquivo (fora de compilerOptions)
   ```
    "include": [
    "src/**/*"
  ],
   ```

Adicionar o exclude logo abaixo após a virgula
```
  "exclude": [
    "node_modules",
    "dist",
    "**/*.spec.ts",
    "**/*.test.ts"
  ]
```


