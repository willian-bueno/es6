/**
 * @author Willian Bueno
 */
class PessoaController {
    constructor(){
      let selector = document.querySelector.bind(document);  
      this._inputDataNascimento = selector('#dataNascimento');
      this._inputIdade = selector('#idade');
      this._inputSalario = selector('#salario');

      this._tbody = document.querySelector('table tbody');
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
      this.apresentaDados(pessoa);
    }

    /**
     * Adiciona os dados no DOM na tabela de apresentação de dados
     * @param {Pessoa} pessoa 
     */
    apresentaDados(pessoa){
      let tr = document.createElement('tr');
      let atributos = [pessoa.dataNascimento,pessoa.idade,pessoa.salario,pessoa.salarioAnual];
      atributos.map((atributo) => {
        let td = document.createElement('td');
        td.textContent = atributo;
        tr.appendChild(td);
      })
      this._tbody.appendChild(tr);
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