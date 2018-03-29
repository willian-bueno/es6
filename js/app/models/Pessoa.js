class Pessoa {
    constructor(data, idade, salario) {
        this._dataNascimento = new Date(data.getTime());
        this._idade = idade;
        this._salario = idade;

        //Congela referencia do objeto evitando alteração
        Object.freeze(this);
    }

    //Encapsulamento
    get volume() {        
        return this._quantidade * this._valor;
    }
    
    get data() {
        /**retorna uma nova referencia para evitar alteração do atributo através dos métodos que objeto Date possui,
         * tentando assim garantir o encapsulamento*/
        return new Date(this._dataNascimento.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}