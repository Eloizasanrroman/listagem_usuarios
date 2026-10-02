import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";
import UserDetailsComponent from "./components/UserDetailsComponent";
import UserForm from "./components/UserForm";
import NovoUsuarioComponent from "./components/NovoUsuarioComponent";
import MensagemSucessoComponent from "./components/MensagemSucessoComponent";
import MensagemErroComponent from "./components/MensagemErroComponent";


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
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)
    const [novoUsuario, setNovoUsuario] = useState(null)
    const [erroCadastro, setErroCadastro] = useState(false)
    const [mostrarCadastro, setMostrarCadastro] = useState(false)

    const usuarioFiltrados = usuarios.filter(
        filtrarUsuarioPorTermo(busca)
    )

    async function buscarUsuario(id) {
        try {
            const usuarioEncontrado = usuarios.find(
                (usuario) => usuario.id === id
            )

            if (usuarioEncontrado && !usuarioEncontrado.address) {
                setUsuarioSelecionado(usuarioEncontrado)
                return
            }

            const response = await axios.get(
                `${url}/users/${id}`
            )
            const data = response.data
            setUsuarioSelecionado(data)

        } catch (error) {
            console.log("Erro o buscar usuário: ", error)
        }
    }

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

    function limparDetalhesUsuario() {
        setUsuarioSelecionado(null)
    }

    function excluirUsuario(id) {
        setUsuarios((usuariosAtuais) =>
            usuariosAtuais.filter((usuario) => usuario.id !== id)
        )
    }

    async function cadastrarUsuario(usuario) {
        try {
            setErroCadastro(false)
            const response = await axios.post(
                `${url}/users`, usuario
            )
            const data = response.data
            setNovoUsuario(data)
            setUsuarios((usuariosAtuais) => [...usuariosAtuais, data])
            setMostrarCadastro(false)

        } catch (error) {
            console.log("Erro ao cadastrar usuário: ", error)

            setNovoUsuario(null)
            setErroCadastro(true)
            setMostrarCadastro(false)
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

                    <button
                        className="botao-cadastrar"
                        onClick={() => setMostrarCadastro(true)}
                    >
                        Cadastrar Usuários +
                    </button>

                    {novoUsuario && (
                        <>
                            <MensagemSucessoComponent />
                            <NovoUsuarioComponent novousuario={novoUsuario} />
                        </>
                    )}

                    {erroCadastro && (
                        <MensagemErroComponent />
                    )}

                    {usuarioFiltrados.length > 0 ? (
                        <UserListComponent
                            usuarios={usuarioFiltrados}
                            onSelecionarUsuario={buscarUsuario}
                            onExcluirUsuario={excluirUsuario}
                        />
                    ) : (
                        <p className="no-users">
                            Nenhum usuário encontrado.
                        </p>
                    )}



                    {usuarioSelecionado && (
                        <UserDetailsComponent
                            usuario={usuarioSelecionado}
                            onFecharDetalhes={limparDetalhesUsuario}
                        />
                    )}

                    {mostrarCadastro && (
                        <div
                            className="cadastro-modal"
                            onClick={() => setMostrarCadastro(false)}
                        >
                            <div
                                className="cadastro-modal-content"
                                onClick={(evento) => evento.stopPropagation()}
                            >
                                <div className="cadastro-modal-header">
                                    <div>
                                        <span className="cadastro-modal-label">
                                            NOVO CADASTRO
                                        </span>

                                        <h2>Cadastrar usuário</h2>

                                        <p>
                                            Preencha os dados abaixo para adicionar um novo usuário.
                                        </p>
                                    </div>

                                    <button
                                        className="cadastro-modal-close"
                                        onClick={() => setMostrarCadastro(false)}
                                    >
                                        ×
                                    </button>
                                </div>

                                <UserForm
                                    onCadastrar={cadastrarUsuario}
                                    onErro={() => {
                                        setNovoUsuario(null)
                                        setErroCadastro(true)
                                        setMostrarCadastro(false)
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default App;