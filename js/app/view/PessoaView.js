/**
 * @author Willian Bueno
 */
class PessoaView extends AbstractView{

    /**
     * cria tabela com os dados do array de pessoas
     * @param {Array<Pessoa>} listaPessoas 
     */
    _template(listaPessoas) {
        return `<table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>IDADE</th>
                        <th>SALARIO</th>
                        <th>SALARIO ANUAL</th>
                    </tr>
                </thead>
                <tbody>
                ${
                    listaPessoas.map(pessoa => {
                        return this._templateTable(pessoa)
                    }).join('')
                }
                </tbody>
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${listaPessoas.reduce((total,pessoa) => total + pessoa.salarioAnual,0.0)}
                    </td>
                </tfoot>
            </table>`;
    }

    /**
     * cria linhas e colunas da tabela com dados do modelo "Pessoa"
     * @param {Pessoa} pessoa 
     */
    _templateTable(pessoa){
        return `<tr>
        <td>${DateUtils.DateToText(pessoa.dataNascimento)}</td>
        <td>${pessoa.idade}</td>
        <td>${pessoa.salario}</td>
        <td>${pessoa.salarioAnual}</td>
    </tr>`
            
    }
}