## Exercícios de lógica de programação

### Questão 01

Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.

Exemplo:

```
cumprimentar("Guilherme") // retornará "Olá, Guilherme!"
```

### Questão 02

Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

Obs: Desconsidere anos bissextos e dias corridos desde o último aniversário.

Exemplo:

```
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
```

### Questão 03

Escreva uma função que retorne o maior número presente no array.

Exemplo:

```
const array = [10,20,30,40]
maiorNumeroNoArray(array) // retornará 40
```

### Questão 04

Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.

Exemplo:

```
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
```

### Questão 05

Escreva uma função que receba um array e retorne a média dos números presentes no array.

Exemplo:

```
const array = [10,15,12,71]
media(array) // retornará "Média: XXX"
```

### Questão 06

Escreva uma função que receba um array e retorne um novo array com apenas os números pares.

Exemplo:

```
const array = [10,15,12,71]
pares(array) // retornará [10,12]
```

### Questão 07

Escreva uma função que receba dois arrays e retorne um novo array contendo apenas os elementos comuns entre os dois arrays.

Exemplo:

```
const array1 = [10,15,12,71]
const array2 = [9,11,12,70]
iguais(array1,array2) // retornará [12]
```

### Questão 08

Escreva uma função que receba um array de números e retorne um novo array com os números em ordem crescente.

Exemplo:

```
const array1 = [10,15,12,71]
crescente(array1) // retornará [10,12,15,71]
```

### Questão 09

Escreva uma função que receba um array de objetos contendo informações sobre livros (título, autor, preço e quantidade em estoque) e retorne um novo array com os livros ordenados por preço e por ordem alfabética do título em caso de preços iguais.

Exemplo:

```
const livros = [
  { titulo: 'O Príncipe', autor: 'Maquiavel', preco: 25, estoque: 5 },
  { titulo: 'O Senhor dos Anéis', autor: 'J. R. R. Tolkien', preco: 40, estoque: 3 },
  { titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J. K. Rowling', preco: 30, estoque: 10 },
  { titulo: '1984', autor: 'George Orwell', preco: 25, estoque: 8 },
  { titulo: 'A Arte da Guerra', autor: 'Sun Tzu', preco: 20, estoque: 6 },
  { titulo: 'A Revolução dos Bichos', autor: 'George Orwell', preco: 25, estoque: 4 },
  { titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez', preco: 35, estoque: 2 },
];
```

### Questão 10

Escreva uma função que receba um array de números e um número como parâmetro, e retorne um novo array com todos os números do array original cuja soma é igual ao número informado como parâmetro.

Exemplo:

```
const array = [10, 32, 50, 17]
somaParametro(array, 4) // retornará "Não tem resultado possível para esta solução"
somaParametro(array, 5) // retornará [32,50]
```

### Questão 11

Escreva uma função que receba um array de strings e retorne um novo array contendo apenas as strings que possuem mais de 5 caracteres.

Exemplo:

```
const nomes = ['Ana', 'João', 'Maria', 'Pedro', 'Carla', 'Ricardo'];
nomesMaioresDoQue5(nomes) // retornará ["Ricardo"] ou "Não existe nenhum nome maior do que 5 caracteres"
```

### Questão 12

Escreva uma função que receba um array de objetos contendo informações sobre pessoas (nome, idade e profissão) e retorne um novo array contendo apenas as pessoas com idade acima de 30 anos.

Exemplo:

```
const pessoas = [
  { nome: 'Alice', idade: 25, profissao: 'Engenheira' },
  { nome: 'Pedro', idade: 31, profissao: 'Advogado' },
  { nome: 'Carlos', idade: 40, profissao: 'Médico' },
  { nome: 'Maria', idade: 27, profissao: 'Designer' }
];

pessoasIdade(pessoas) // retornará [{ nome: 'Pedro', idade: 31, profissao: 'Advogado' },{ nome: 'Carlos', idade: 40, profissao: 'Médico' }] ou "Todo mundo ainda é jovem"
```

### Questão 13

Escreva uma função que receba um array de objetos contendo informações sobre produtos (nome, preço e quantidade em estoque) e retorne um novo array contendo os produtos com estoque menor que 10 unidades, ordenados por ordem crescente de preço.

Exemplo:

```
const produtos = [
  { nome: 'Notebook', preco: 2500, estoque: 5 },
  { nome: 'Smartphone', preco: 1500, estoque: 7 },
  { nome: 'Tablet', preco: 1000, estoque: 2 },
  { nome: 'Impressora', preco: 800, estoque: 12 },
  { nome: 'Monitor', preco: 1200, estoque: 3 },
];
```
