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

      this._mensagem = new Mensagem();
      this._mensagemView = new MensagemView(selector('#mensagem'));
    }

    /**
     * Adiciona dados de Pessoa
     * @param {Event} event 
     */
    adiciona(event) {
      event.preventDefault();
      this._listaPessoas.push(this.criaPessoa());
      this._mensagemView.update(this._mensagem.texto = "Cadastro realizado com sucesso!");
      this._pessoaView.update(this._listaPessoas);
      this.limpaFormulario();
    }

    /**
     * cria Objeto do tipo Pessoa
     */
    criaPessoa(){
      return new Pessoa(
        DateUtils.textToData(this._inputDataNascimento.value),
        this._inputIdade.value,
        this._inputSalario.value
      )
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