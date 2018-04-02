class B{
    constructor(msg){
        this._msg = `atributo this da class B : ${msg}`;
    }

    apresentaMsg(){
        Reflect.apply(A.prototype.apresentaMsg,this,[])
    }
}