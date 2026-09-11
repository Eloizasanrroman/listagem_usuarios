function UserDetailsComponent({ usuario, onFecharDetalhes }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div>
                        <span className="modal-label">INFORMAÇÕES</span>
                        <h2>Detalhes do usuário</h2>
                    </div>

                    <button
                        className="modal-close"
                        onClick={onFecharDetalhes}
                    >
                        ×
                    </button>
                </div>

                <div className="modal-info">
                    <p>
                        <strong>Nome</strong>
                        {usuario.name}
                    </p>

                    <p>
                        <strong>E-mail</strong>
                        {usuario.email}
                    </p>

                    <p>
                        <strong>Cidade</strong>
                        {usuario.address.city}
                    </p>

                    <p>
                        <strong>Telefone</strong>
                        {usuario.phone}
                    </p>
                </div>

                <button
                    className="modal-button"
                    onClick={onFecharDetalhes}
                >
                    Fechar detalhes
                </button>

            </div>
        </div>
    )
}

export default UserDetailsComponent
