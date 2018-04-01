/**
 * @author Willian Bueno
 */
class PessoaController {
    constructor(){
      let selector = document.querySelector.bind(document);  
      this._inputDataNascimento = selector('#dataNascimento');
      this._inputIdade = selector('#idade');
      this._inputSalario = selector('#salario');
      this._listaPessoas = [];
      this._pessoaView = new PessoaView(selector('#pessoaView'));

    }

    /**
     * Adiciona dados de Pessoa
     * @param {Event} event 
     */
    adiciona(event) {
      event.preventDefault();
      this._listaPessoas.push(new Pessoa(
        DateUtils.textToData(this._inputDataNascimento.value),
        this._inputIdade.value,
        this._inputSalario.value
      ));
      this._pessoaView.update(this._listaPessoas);
      this.limpaFormulario();
    }

    /**
     * Limpa formulario de cadastro de Pessoas
     */
    limpaFormulario(){
      this._inputDataNascimento.value = ''
      this._inputIdade.value = 1;
      this._inputSalario.value = 0;
      this._inputDataNascimento.focus();
    }
  }