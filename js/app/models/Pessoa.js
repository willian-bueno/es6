const QTD_MES_ANO = 12   
class Pessoa {
    constructor(data, idade, salario) {
        this._dataNascimento = new Date(data.getTime());
        this._idade = idade;
        this._salario = idade;

        //Congela referencia do objeto evitando alteração
        Object.freeze(this);
    }

    //Encapsulamento  
    get dataNascimento() {
        /**retorna uma nova referencia para evitar alteração do atributo através dos métodos que objeto Date possui,
         * tentando assim garantir o encapsulamento*/
        return new Date(this._dataNascimento.getTime());
    }
    
    get idade() {
        return this._idade;
    }
    
    get salario() {
        return this._salario;
    }

    get salarioAnual() {     
        return this._salario * QTD_MES_ANO;
    }
}