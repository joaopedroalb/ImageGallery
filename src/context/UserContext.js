import React, { createContext, useCallback, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../Utils/api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()


export function UserProvider({ children }) {
    const [user,setUser] = useState(null)
    const [login,setLogin] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const navigate = useNavigate()

    const userLogout = useCallback(async() =>{
        setError(null)
        setUser(null)
        setLogin(false)
        setLoading(false)
        window.localStorage.removeItem('token')
        navigate('/teste')
    },[navigate])

    useEffect(()=>{
        async function autoLogin(){
            const token = window.localStorage.getItem('token')
            if(token){
                try{
                    setError(null)
                    setLoading(true)

                    const {url,options} = TOKEN_VALIDATE_POST(token)
                    const res = await fetch(url,options)

                    if(!res.ok) 
                        throw new Error('Token Invalido')

                    await getUser(token)

                }catch(err){
                    userLogout()
                }finally{
                    setLoading(false)
                }
            }
        }

        autoLogin()
    },[userLogout])

    async function userLogin(username,password){
        try{
            setError(null)
            setLoading(true)

            const {url,options} = TOKEN_POST({username,password})
            const tokenRes = await fetch(url,options)
            console.log(tokenRes)
            if(!tokenRes.ok) throw new Error(`Error: Login Invalido`)

            const {token} = await tokenRes.json()
            window.localStorage.setItem('token',token)
            await getUser(token)
            navigate('/account')
        }catch(err){
            setError(err.message)
            setLogin(false)
        }finally{
            setLoading(false)
        }
    }

    async function getUser(token){
        const {url,options} = USER_GET(token)
        const res = await fetch(url,options)
        const data = await res.json()
        setUser(data)
        setLogin(true)
    }

    return (
        <UserContext.Provider value={{user,userLogin,userLogout,error,loading,login}}>
            {children}
        </UserContext.Provider>
    )
}
