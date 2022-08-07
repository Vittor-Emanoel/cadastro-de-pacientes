var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//ele só para quando for menor que 0 pacientes.
// armazenando todos os paciente dentro de uma array. array pacientes e esse array está dentro da variavel paciente.

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var AlturaEhValida = true;

  //Teste logico para saber se o peso e a altura são validas.

  //adicionando estilos pela classe css. - alterando o aspecto visual.
  //tem duas formas de manipular os styles em Java script.
  // 1- style.color = color || criando uma classe css
  if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "Informações Inválidas!";
    paciente.classList.add("paciente-invalido");
    pesoEhValido = false;
  }
  if (altura <= 0 || altura >= 3.0) {
    tdImc.textContent = "Informações Inválidas!";
    paciente.classList.add("paciente-invalido");
    AlturaEhValida = false;
  }

  //teste de validação logico para calcular ou não calcular o IMC
  //Não tem teste === pq ele já comeca como verdadeiro
  if (pesoEhValido && AlturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; 
  }
}


function calculaImc(peso, altura) {
  var imc = 0; 
  imc = peso / (altura * altura); 

  return imc.toFixed(2);
}
/*
ESSES SÃO OS DOIS JEITOS DE ADD EVENTOS

FUNÇÃO DECLARATIVA OU ANONIMA

titulo.addEventListener('click', mostraMensagem);

function mostraMensagem() {
  return console.log('Olá, eu fui clicado!');
}

titulo.addEventListener('click', function(){
  console.log('oláa')
})*/
