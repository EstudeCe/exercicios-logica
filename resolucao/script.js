function maiorNumero(array) {
  let maior = array[0]; //3

  for (let contador = 1; contador < array.length; contador++) {
    const element = array[contador]; // 3
    if (element > maior) {
      maior = element;
    }
  }

  return maior;
}

function calcularSalario(horas, salario) {
  const ganhouNoMes = horas * salario;

  return `Salário igual a R$ ${ganhouNoMes}`;
}

function calcularMedia(array) {
  let soma = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    soma += element;
  }

  const media = soma / array.length;

  return media;
}

function calcularMedia2(array) {
  const soma = array.reduce((acumulador, current) => acumulador + current, 0);

  const media = soma / array.length;

  return media;
}

function calcularMedia3(array) {
  const media = array.reduce((acumulador, current, index, array) => {
    if (index === array.length - 1) {
      const soma = acumulador + current;
      const media = soma / array.length;

      return media;
    }

    return acumulador + current;
  }, 0);

  return media;
}

function numerosPares(array) {
  const filtered = array.filter((value) => value % 2 === 0);

  return filtered;
}

function iguais(array1, array2) {
  const comuns = [];

  for (let index = 0; index < array1.length; index++) {
    const element = array1[index]; // 10

    for (let index2 = 0; index2 < array2.length; index2++) {
      const element2 = array2[index2];

      if (element === element2) {
        comuns.push(element2);
      }
    }
  }

  return comuns;
}

function elementosComuns(array1, array2) {
  const comuns = array1.filter((value) => array2.includes(value));

  return comuns;
}

function crescente(array) {
  const ordened = array.sort((a, b) => a - b);

  return ordened;
}

function ordenarLivros(array) {
  const ordened = array.sort((a, b) => b.preco - a.preco);

  return ordened;
}

function nomesMaioresDoQue5(nomes) {
  const filtered = nomes.filter((name) => name.length > 5);

  if (filtered.length === 0) {
    return "Não existe nenhum nome maior do que 5 caracteres.";
  }

  return filtered;
}
function pessoasIdade(array) {
  const filtered = array.filter((person) => person.idade > 30);

  return filtered;
}

const produtos = [
  { nome: "Notebook", preco: 2500, estoque: 5 },
  { nome: "Smartphone", preco: 1500, estoque: 7 },
  { nome: "Tablet", preco: 1000, estoque: 2 },
  { nome: "Impressora", preco: 800, estoque: 12 },
  { nome: "Monitor", preco: 1200, estoque: 3 },
];

function filtrarProduto(produtos) {
  const filtered = produtos.filter((produto) => produto.estoque < 10);

  const ordened = filtered.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    }

    return 1;
  });

  return ordened;
}

console.log(filtrarProduto(produtos));
