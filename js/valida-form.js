
let msg = document.querySelector(".msg-erro");

function validaFormulario(paciente){

    let attr = Object.values(paciente);

    attr.forEach(element => {
        console.log(element.value)
    });
}


const espacoEmBranco = function(valor){

    let re = /\W+.*\W+/; // Expressão regular que identifica se há algum texto no input

    if(re.test(valor)){
        msg.innerHTML = "Necessário preencher todos os campos!";
        return valor;
    }
    return true;
}

/*
const maiorQueZero = function(valor){
    if(valor<=0)return false;
    return true;
}
*/