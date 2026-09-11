function UserCardComponent({ usuario, onSelecionarUsuario }) {
    return (
        <li className="user-card">
            <h2 className="user-name">
                {usuario.name}
            </h2>

            <button
                onClick={() => {
                    onSelecionarUsuario(usuario.id)
                }}
            >Ver detalhes</button>
        </li>
    )
}

export default UserCardComponent