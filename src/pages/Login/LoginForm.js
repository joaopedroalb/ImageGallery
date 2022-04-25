import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import { TOKEN_POST, USER_GET } from '../../Utils/api';
import useForm from '../../Hooks/useForm';

export default function LoginForm() {
    const username = useForm();
    const password = useForm()

    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        if(token)
            getUser(token)
    },[])

    const getUser = async(token) =>{
        const {url,options} = USER_GET(token)
        const res = await fetch(url,options)
        const json = await res.json()
        console.log(json)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if(username.validate() && password.validate()){
            const {url,options} = TOKEN_POST({
                                                username:username.value,
                                                password:password.value
                                            })
            const res = await fetch(url, options)
            const result = await res.json()
            window.localStorage.setItem('token',result.token)
            getUser(result.token)
        }
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
