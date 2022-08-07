var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
  event.preventDefault();
  //pegando o form
  var form = document.querySelector("#form-adiciona");
  //extraindo informaçoes do paciente
  var paciente = obtemPacienteDoFormulario(form);

  //cria a tr a td do paciente
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
  
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");


  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

