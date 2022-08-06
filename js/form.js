var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //pegando os dados do form
  var formName = form.nome.value;
  var formPeso = form.peso.value;
  var formAltura = form.altura.value;
  var formGordura = form.gordura.value;

  //criar tabela no html com javascrit:
  var pacienteTr = document.createElement("tr");

  //criando os tds:
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  //preenchendo os ts com os valores do form:

  nomeTd.textContent = formName;
  pesoTd.textContent = formPeso;
  alturaTd.textContent = formAltura;
  gorduraTd.textContent = formGordura;

  //colocando os tds dentro do tr:
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  //trazendo o tr para dentro da tabela:
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
