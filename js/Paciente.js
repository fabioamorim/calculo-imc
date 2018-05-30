class Paciente{

    constructor(nome,idade,peso,altura){

        this.nome = nome,
        this.idade = idade,
        this.peso = peso,
        this.altura = altura,        
        this.imc = (peso.value/(altura.value*altura.value));

    }
/*
    get nome(){return this.nome}
    get idade(){return this.idade}
    get peso(){return this.peso}
    get altura(){return this.altura}
    get imc(){return this.imc}
*/

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getPeso(){
        return this.peso;
    }

    getAltura(){
        return this.altura;
    }

    getImc(){
        return this.imc.toFixed(2);
    }
    
}