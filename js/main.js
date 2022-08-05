var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//ele só para quando for menor que 0 pacientes.
for (let i = 0; i < pacientes.length; i++) {
    
  var paciente = pacientes[i]; // armazenando todos os paciente dentro de uma array. array pacientes e esse array está dentro da variavel paciente.

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var AlturaEhValida = true;

  //Teste logica para saber se o peso e a altura são validas.

  if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "Informações Inválidas!";
    tdImc.style.color = "red";
    pesoEhValido = false;
  }
  if (altura <= 0 || altura >= 3.0) {
    tdImc.textContent = "Informações Inválidas!";
    tdImc.style.color = "red";
    AlturaEhValida = false;
  }

  //teste de validação logico para calcular ou não calcular o IMC
  //Não tem teste === pq ele já comeca como verdadeiro
  if (pesoEhValido && AlturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);//etoFixed limita as casas decimas
  }
}
