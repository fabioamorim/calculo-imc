
const btn = document.querySelector("#executa");

btn.addEventListener("click",function(event){    

    event.preventDefault();

    let nome =  document.querySelector("#nome");
    let idade = document.querySelector("#idade");
    let peso =  document.querySelector("#peso");
    let altura = document.querySelector("#altura");

    const paciente = new Paciente(nome,idade,peso,altura);
    
    //Valida informações do formulário
    if(!validaFormulario(paciente)){
        inseriNaTabela(paciente);
        limpaFormulario(paciente);
    }else{
        let alerta = validaFormulario(paciente);
        alerta.focus();
        //alert("Necessário preencher todos os campos!");
        //Gera mensagem de erro e posiona cursos no campo que nnão está conforme.
    }

})

const inseriNaTabela = function(paciente){
 
    var tr = document.createElement('tr');

    let td = document.createElement('td');
        td.textContent = paciente.getNome().value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.getIdade().value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.getPeso().value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.getAltura().value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.getImc();
        tr.appendChild(td);

    var tbody = document.querySelector(".corpo");

    tbody.appendChild(tr);

}

function limpaFormulario(paciente) {
    paciente.getNome().value = "";
    paciente.getIdade().value = "";
    paciente.getPeso().value = "";
    paciente.getAltura().value = "";
}

