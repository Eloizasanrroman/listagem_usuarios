function HeaderComponent({ busca, setBusca }) {
    return (
        <>
            <h1 className="title">Catálogos de Usuários</h1>

            <input
                className="search"
                type="text"
                placeholder="Filtrar usuário..."
                value={busca}
                onChange={(evento) => {
                    setBusca(evento.target.value)
                }}
            />
        </>
    )
}

export default HeaderComponent