/**
 * @author Willian Bueno
 */
class PessoaController {
    constructor(){
      let selector = document.querySelector.bind(document);  
      this._inputDataNascimento = selector('#dataNascimento');
      this._inputIdade = selector('#idade');
      this._inputSalario = selector('#salario');
    }

    /**
     * Adiciona dados de Pessoa
     * @param {Event} event 
     */
    adiciona(event) {
      event.preventDefault();
      let pessoa = new Pessoa(
        this.converteData(this._inputDataNascimento.value),
        this._inputIdade.value,
        this._inputSalario.value
      )
    }
    
    /**
     * recebe String formato yyyy-MM-dd e converte para Data
     * @param {string} data 
     */
    converteData(data){
      console.log(data);
      return new Date(data.replace(/-/g,','));
    }
  }