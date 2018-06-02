
const btnExecuta = document.querySelector("#executa");

const btnLimpaTabela = document.querySelector("#limpa-tabela");

btnLimpaTabela.addEventListener("click",function(){
    document.onload();
});

btnExecuta.addEventListener("click",function(event){    

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
        msg.innerHTML = "";        
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
        td.textContent = paciente.nome.value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.idade.value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.peso.value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.altura.value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.imc;
        tr.appendChild(td);

    var tbody = document.querySelector(".corpo");

    tbody.appendChild(tr);

}

function limpaFormulario(paciente) {
    paciente.nome.value = "";
    paciente.idade.value = "";
    paciente.peso.value = "";
    paciente.altura.value = "";
}

