import UserCardComponent from "./UserCardComponent"

function UserListComponent({ usuarios }) {
    return (
        <ul className="user-list">
            {usuarios.map(usuario => (
                <UserCardComponent
                    key={usuario.id}
                    usuario={usuario}
                />
            ))}
        </ul>
    )
}

export default UserListComponent