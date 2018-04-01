class AbstractView{
    constructor(elemento){
        this._elemento = elemento;
    }

    /**
     * método abstract
     */
    template(){
        throw new Error("Classes filhas devem implementar o método");
    }
    
    update(obj){
        this._elemento.innerHTML = this.template(obj);
    }
}