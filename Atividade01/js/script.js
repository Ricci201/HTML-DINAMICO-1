const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  const trocarImagens = [
    "img/Palmeiras.png",
    "img/Piquerez.png",
    "img/rios.jpg",
    "img/Veiga.png",
  ];

  let indice = 0;

  let numero = Math.random();

  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  imagem.src = trocarImagens[indice];
};

const calcular = (operador) => {
  let valor1 = parseFloat(frmCalculadora.inValor1.value);
  let valor2 = parseFloat(frmCalculadora.inValor2.value);
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;

    case "-":
      resultado = valor1 - valor2;
      break;

    case "*":
      resultado = valor1 * valor2;
      break;

    case "/":
      resultado = valor1 / valor2;
      break;
  }

  frmCalculadora.inResultado.value = resultado;
};
