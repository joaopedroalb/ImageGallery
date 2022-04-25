import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../context/UserContext';

export default function LoginForm() {
    const username = useForm();
    const password = useForm()
    const {userLogin, error, loading} = useContext(UserContext)

    async function handleSubmit(event) {
        event.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value,password.value)
        }
    }

    return (
        <section onSubmit={handleSubmit}>
            <h1>Login</h1>
            <form action=''>
                <Input label='Usário' type='text' name='user' {...username}/>
                <Input label='Senha' type='password' name='password' {...password}/>

                {loading ? <Button disabled>Carregando</Button>:<Button>Entrar</Button>}
                {error&&<p>{error}</p>}
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )
}
