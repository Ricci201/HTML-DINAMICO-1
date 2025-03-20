//Criando a função de flecha com frases aleatórias
const falar = () => {
  //Criando o vetor de frases
  const frases = [
    "Bom dia, hoje o dia esta lindo",
    "Boa tarde, agora de tarde esta chovendo",
    "Qual o cardapio do almoço",
    "Vish, tem prova de quimica",
  ];

  //Criando uma variavel para arazenar a DIV com id "tagarela"
  let tagarela = document.getElementById("tagarela");

  //Criando variavel de controle para a frase exibida
  let indice = 0;

  //Criando variavel para numero aleatório entre 0 a 1 (lembrando que o 1 não entra na conta)
  let numero = Math.random();

  //COnfigurando o numero para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  //Escrevendo a frase para o usuario
  tagarela.innerHTML = frases[indice];
};
