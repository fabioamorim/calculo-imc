function validaFormulario(cliente){

    if(cliente.getNome() == '') return true;
   
    if(cliente.getIdade() == '') return true;

    if(cliente.getAltura() == '') return true;

    if(cliente.getPeso()== '') return true;

    return false;
    
}