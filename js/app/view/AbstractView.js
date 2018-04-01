class AbstractView{
    constructor(elemento){
        this._elemento = elemento;
    }

    update(obj){
        this._elemento.innerHTML = this._template(obj);
    }
}