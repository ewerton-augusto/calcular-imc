var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

    var pacientes = document.querySelectorAll(".paciente");


    if (this.value.length > 0) {
        for (var i = 0; pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //criando a expressão regular para o filtro
            var expressao = new RegExp(this.value, "i"); //O modificador "i" é para indicar que estamos buscando por case-insensitive

            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }

    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});