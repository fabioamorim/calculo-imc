
const btn = document.querySelector("#executa");

btn.addEventListener("click",function(event){    

    event.preventDefault();

    let nome =  document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let peso =  document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;

    const paciente = new Paciente(nome,idade,peso,altura);
    
    //Valida informações do formulário
    if(!validaFormulario(paciente)){
        inseriNaTabela(paciente);
        limpaFormulario();
    }else{
        alert("Necessário preencher todos os campos!");
        //Gera mensagem de erro e posiona cursos no campo que nnão está conforme.
    }

})

const inseriNaTabela = function(paciente){
 
    var tr = document.createElement('tr');

    let td = document.createElement('td');
        td.textContent = paciente.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.peso;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.altura;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = paciente.getImc();
        tr.appendChild(td);

    var tbody = document.querySelector(".corpo");

    tbody.appendChild(tr);

}



function limpaFormulario() {
    document.querySelector("#nome").value = "";
    document.querySelector("#idade").value = "";
    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
}

