import React, { useContext } from 'react'
import Button from '../../components/Forms/Button'
import Input from '../../components/Forms/Input'
import { UserContext } from '../../context/UserContext'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { USER_POST } from '../../Utils/api'
import { Error } from '../../components/Helper/Error' 



import styles from './logincreate.module.css'

export default function LoginCreate() {

  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const {userLogin} = useContext(UserContext)
  const {data,loading,error,request} = useFetch()

  async function handleSubmit(event){
    event.preventDefault()
    const {url,options} = USER_POST({
                          username:username.value,
                          email:email.value,
                          password:password.value
                        })

    const {res}  = await request(url,options)

    if(res.ok) userLogin(username.value,password.value)
  }

  return (
    <section className={`animeLeft`}>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input 
          label="Email"
          type="email"
          name="email"
          {...email}
        />
        <Input 
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? 
            <Button disabled>Cadastrando...</Button>
            :
            <Button>Cadastrar</Button>
        }
        <Error error={error}/> 
        
      </form>
    </section>
  )
}
