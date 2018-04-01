class MensagemView extends AbstractView{
    template(mensagem){
        return mensagem ? `<p class="alert alert-info">${mensagem}</p>` : '<p></p>';
    }
}