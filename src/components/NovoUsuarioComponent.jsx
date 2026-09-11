function NovoUsuarioComponent({ novousuario }) {
    return (
        <div className="novo-usuario">
            <h2>Dados do usuário cadastrado</h2>

            <p>
                <strong>Nome</strong>
                {novousuario.name}
            </p>

            <p>
                <strong>Usuário</strong>
                {novousuario.username}
            </p>

            <p>
                <strong>E-mail</strong>
                {novousuario.email}
            </p>

            <p>
                <strong>Telefone</strong>
                {novousuario.phone}
            </p>
        </div>
    )
}

export default NovoUsuarioComponent
