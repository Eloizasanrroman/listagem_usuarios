function MensagemErroComponent() {
    return (
        <div className="mensagem-erro">
            <span className="mensagem-icone">!</span>

            <div>
                <strong>Ocorreu um Erro</strong>
                <p>Você precisa preencher todos os campos.</p>
            </div>
        </div>
    )
}

export default MensagemErroComponent