const anoAtual = new Date().getFullYear();

const Calcular = (anoNascimento) => anoAtual - anoNascimento;

const LimpaResultado = (filhos) => {
  if (filhos.children.length > 0) {
    filhos.children[0].remove();
  }
};
const CriaResposta = (resultado) => {
  const DivM = document.querySelector("#central_resposta");

  const h1Resposta = document.createElement("h1");
  h1Resposta.textContent = `${resultado}`;

  LimpaResultado(DivM);

  DivM.appendChild(h1Resposta);
  return DivM;
};

const Resultado = () => {
  const anoNascimento = document.querySelector("#inputAno").value;

  const resultado = Calcular(anoNascimento);

  CriaResposta(resultado);
};
