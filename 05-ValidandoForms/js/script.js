//alert("Alerta com ação de click!");
//Cria alerta na pagina com ação de click em OK

frmExemplo.inNome.focus();

const validarDados = () => {
  let nome = frmExemplo.inNome.value;
  let idade = frmExemplo.inIdade.value;

  if (nome.trim() == "") {
    alert("O campo nome não pode estar vazio!");
    frmExemplo.inNome.focus();
    return false;
  }

  if (idade.trim() == "" || idade < 0) {
    alert("O campo idade não pode estar vazio ou negativo");
    frmExemplo.inIdade.focus();
    return false;
  }

  if (nome.trim() != "" && idade.trim() != "" && idade > 0) {
    alert("Formulario enviado!");
    location.reload();
  }
};
