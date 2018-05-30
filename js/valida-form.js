function validaFormulario(paciente){

    if(paciente.getNome().value == ''){
        return paciente.getNome();
    } 
   
    if(paciente.getIdade().value == ''){
        return paciente.getIdade();
    }

    if(paciente.getPeso().value == ''){
        paciente.getPeso().focus();
        return paciente.getPeso();
    }

    if(paciente.getAltura().value == ''){
         return paciente.getAltura();
    }   

    return false;
    
}