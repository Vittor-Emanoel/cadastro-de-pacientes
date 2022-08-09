var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var AlturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    tdImc.textContent = "Informações Inválidas!";
    paciente.classList.add("paciente-invalido");
    pesoEhValido = false;
  }
  if (!AlturaEhValida) {
    tdImc.textContent = "Informações Inválidas!";
    paciente.classList.add("paciente-invalido");
    AlturaEhValida = false;
  }

  if (pesoEhValido && AlturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
