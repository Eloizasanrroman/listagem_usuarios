import UserCardComponent from "./UserCardComponent" 
 
function UserListComponent({ usuarios, onSelecionarUsuario, onExcluirUsuario }) { 
    return ( 
        <ul className="user-list"> 
            {usuarios.map(usuario => ( 
                <UserCardComponent 
                    key={usuario.id} 
                    usuario={usuario} 
                    onSelecionarUsuario={onSelecionarUsuario}
                    onExcluirUsuario={onExcluirUsuario}
                /> 
            ))} 
        </ul> 
    ) 
} 
 
export default UserListComponent