import React, { createContext, useState } from 'react'
import { TOKEN_POST, USER_GET } from '../Utils/api'

export const UserContext = createContext()


export function UserProvider({ children }) {
    const [user,setUser] = useState(null)
    const [login,setLogin] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    async function userLogin(username,password){
        const {url,options} = TOKEN_POST({username,password})
        const tokenRes = await fetch(url,options)
        const {token} = await tokenRes.json()
        window.localStorage.setItem('token',token)
        getUser(token)
    }

    async function getUser(token){
        const {url,options} = USER_GET(token)
        const res = await fetch(url,options)
        const data = await res.json()
        setUser(data)
        setLogin(true)
    }

    return (
        <UserContext.Provider value={{user,userLogin}}>
            {children}
        </UserContext.Provider>
    )
}
