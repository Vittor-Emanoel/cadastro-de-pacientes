var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //pegando os dados do form
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  //criar tabela no html com javascrit:
  var pacienteTr = document.createElement("tr");

  //criando os tds:
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  //preenchendo os ts com os valores do form:

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso, altura);
  //colocando os tds dentro do tr:
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);


  //trazendo o tr para dentro da tabela:
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
