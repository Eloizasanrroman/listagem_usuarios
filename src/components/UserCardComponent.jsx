function UserCardComponent({ usuario, onSelecionarUsuario, onExcluirUsuario }) { 
    return ( 
        <li className="user-card"> 
            <h2 className="user-name"> 
                {usuario.name} 
            </h2> 
 
            <button 
                onClick={() => { 
                    onSelecionarUsuario(usuario.id) 
                }} 
            >
                Ver detalhes
            </button>

            <button 
                onClick={() => { 
                    onExcluirUsuario(usuario.id) 
                }} 
            >
                Excluir
            </button>
        </li> 
    ) 
} 
 
export default UserCardComponent