import { useState } from "react";

function UserForm({ onCadastrar, onErro }) {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")


    function handleSubmit(evento) {
        evento.preventDefault()

        if (
            name.trim() === "" ||
            username.trim() === "" ||
            email.trim() === "" ||
            telefone.trim() === ""
        ) {
            onErro()
            return
        }

        const novoUsuario = {
            name: name,
            username: username,
            email: email,
            phone: telefone,
        }

        onCadastrar(novoUsuario)
        limparFormulario()
    }

    function limparFormulario() {
        setName("")
        setUsername("")
        setEmail("")
        setTelefone("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(evento) => {
                    setName(evento.target.value)
                }}
            />

            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(evento) => {
                    setUsername(evento.target.value)
                }}
            />

            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value)
                }}
            />

            <input
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(evento) => {
                    setTelefone(evento.target.value)
                }}
            />

            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default UserForm
