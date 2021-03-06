import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../context/UserContext';

import styles from './loginform.module.css'
import stylesBtn from '../../components//Forms/Button/styles.module.css'

import { Error } from '../../components/Helper/Error';

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
        <section className={`animeLeft`}>
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label='Usário' type='text' name='user' {...username}/>
                <Input label='Senha' type='password' name='password' {...password}/>

                {loading ? <Button disabled>Carregando</Button>:<Button>Entrar</Button>}
                <Error error={error}/>
            </form>
            <Link to="/login/perde" className={styles.lost}>Perdeu a senha ?</Link>
            <div className={styles.create}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre agora!</p>
            </div>
            <Link to="/login/create" className={stylesBtn.button}>
                Cadastro
            </Link>
        </section>
    )
}
