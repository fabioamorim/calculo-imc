class Paciente{

    constructor(nome,idade,peso,altura){

        this._nome = nome,
        this._idade = idade,
        this._peso = peso,
        this._altura = altura,        
        this._imc = (peso.value/(altura.value*altura.value));

    }

    get nome(){return this._nome}
    get idade(){return this._idade}
    get peso(){return this._peso}
    get altura(){return this._altura}
    get imc(){return this._imc.toFixed(2)}
   
}