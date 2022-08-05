var titulo = document.querySelector('h1');

titulo.textContent = 'Aparecida Nutricionista';


var paciente = document.querySelector("#primeiro");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');

var imc = peso / (altura * altura);

tdImc.textContent = imc;


console.log(peso);
console.log(altura);
console.log(imc);



