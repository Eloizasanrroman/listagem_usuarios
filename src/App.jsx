import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";

const filtrarUsuarioPorTermo = (termo) => (usuario) => {
    const termoLower = termo.toLowerCase()

    return (
        usuario.name.toLowerCase().includes(termoLower) ||
        usuario.username.toLowerCase().includes(termoLower) ||
        usuario.email.toLowerCase().includes(termoLower)
    )
}

function App() {
    const url = "https://jsonplaceholder.typicode.com"

    const [usuarios, setUsuarios] = useState([])
    const [erro, setErro] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [busca, setBusca] = useState("")

    const usuarioFiltrados = usuarios.filter(
        filtrarUsuarioPorTermo(busca)
    )

    async function buscarUsuarios() {
        try {
            setCarregando(true)

            const response = await axios.get(
                `${url}/users`
            )

            const data = response.data

            setUsuarios(data)

        } catch (error) {
            console.log(
                'Erro ao buscar usuários: ',
                error
            )

            setErro(
                `Não foi possível carregar os usuários. Código: ${error.message}`
            )

            setUsuarios([])

        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        buscarUsuarios()
    }, [])

    return (
        <div className="container">

            <HeaderComponent
                busca={busca}
                setBusca={setBusca}
            />

            {carregando && (
                <LoadingComponent />
            )}

            <p className="info">
                Usuários encontrados: {usuarios.length}
            </p>

            {erro && (
                <p className="error">
                    {erro}
                </p>
            )}

            {!carregando && !erro && (
                <>
                    <p className="info">
                        {usuarioFiltrados.length} usuário(s) encontrado(s)
                    </p>

                    {usuarioFiltrados.length > 0 ? (
                        <UserListComponent
                            usuarios={usuarioFiltrados}
                        />
                    ) : (
                        <p className="no-users">
                            Nenhum usuário encontrado.
                        </p>
                    )}
                </>
            )}

        </div>
    );
}

export default App;