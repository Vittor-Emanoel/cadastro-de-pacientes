var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        
        //Expressão regular
        var expressao = new RegExp(this.value, 'i');
  
        if (!expressao.test(nome)) {
          paciente.classList.add("esconder");
        } else {
          paciente.classList.remove("esconder");
        }
      }
    }else{
      for (var i = 0; i < pacientes.length; i++) {
        pacientes[i].classList.remove('esconder');
    }
}
});
 

