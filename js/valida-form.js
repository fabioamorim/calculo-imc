function validaFormulario(paciente){

    let espacoEmBranco = /\W+.*\W+/; // Expressão regular que identifica se há algum texto no input

    if(espacoEmBranco.test(paciente.nome.value)){
        return paciente.nome;
    } 
   
    if(espacoEmBranco.test(paciente.idade.value)){
        return paciente.idade;
    }

    if(espacoEmBranco.test(paciente.peso.value)){
        return paciente.peso;
    }

    if(espacoEmBranco.test(paciente.altura.value)){
         return paciente.altura;
    }   

    return false;
    
}