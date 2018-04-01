class MensagemView extends AbstractView{
    _template(mensagem){
        return mensagem ? `<p class="alert alert-info">${mensagem}</p>` : '<p></p>';
    }
}