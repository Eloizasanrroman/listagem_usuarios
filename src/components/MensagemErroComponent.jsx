function MensagemErroComponent() {
    return (
        <div className="mensagem-erro">
            <span className="mensagem-icone">!</span>

            <div>
                <strong>Não foi possível cadastrar o usuário.</strong>
                <p>Ocorreu um erro ao tentar realizar o cadastro.</p>
            </div>
        </div>
    )
}

export default MensagemErroComponent
