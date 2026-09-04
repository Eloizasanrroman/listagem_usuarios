function UserCardComponent({ usuario }) {
    return (
        <li className="user-card">
            <hr />
            <strong className="user-name">
                {usuario.name}
            </strong>
            <br /><br />
        </li>
    )
}

export default UserCardComponent