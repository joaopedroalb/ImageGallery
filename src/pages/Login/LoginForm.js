import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import useForm from '../../Hooks/useForm';

export default function LoginForm() {
    const username = useForm();
    const password = useForm()

    async function handleSubmit(event) {
        event.preventDefault();
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                                    username:username.value,
                                    password:password.value
                                }),
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
                <Input label='Usário' type='text' name='user' {...username}/>
                <Input label='Senha' type='password' name='password' {...password}/>

                <Button>Entrar</Button>
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )
}
