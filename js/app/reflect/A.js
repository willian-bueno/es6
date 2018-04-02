class A{
    constructor(msg){
        this._msg = `atributo this da class A : ${msg}`;
    }

    apresentaMsg(){
        console.log("executando método da class A")
        console.log(this._msg)
    }
}