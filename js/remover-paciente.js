var pacientes = document.querySelectorAll('table');

pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(event) {
        event.target.parentNode.classList.add('fadeOut');

        setTimeout(() => {
            event.target.parentNode.remove();
        }, 500);
    });
})