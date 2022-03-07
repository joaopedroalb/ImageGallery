import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username,password}),
        }

        console.log(config)

        const res = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', config)
        const result = await res.json()
        console.log(result)
    }

    return (
        <section onSubmit={handleSubmit}>
            <h1>Login</h1>
            <form action=''>
                <input
                    type='text'
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />

                <input
                    type='text'
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />

                <button>Entrar</button>
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )
}
