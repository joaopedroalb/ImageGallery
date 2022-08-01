import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeaderStyle.module.css'

export default function UserHeader() {
    const[title,setTitle] = React.useState('')
    const location = useLocation()

    useEffect(()=>{
        const path = location.pathname
        switch(path){
            case '/account/stats':
                setTitle('Estatísticas')
                break
            case '/account/post':
                setTitle('Adicionar Foto')
                break
            default:
                setTitle('Minhas Fotos')
                break
        }
            
    },[location])

    return (
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
  )
}
