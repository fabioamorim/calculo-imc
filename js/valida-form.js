function validaFormulario(paciente){

    if(paciente.nome.value == ''){
        return paciente.nome;
    } 
   
    if(paciente.idade.value == ''){
        return paciente.idade;
    }

    if(paciente.peso.value == ''){
        return paciente.peso;
    }

    if(paciente.altura.value == ''){
         return paciente.altura;
    }   

    return false;
    
}