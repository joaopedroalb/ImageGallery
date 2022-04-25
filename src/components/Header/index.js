import React, { useContext } from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom' 
import {ReactComponent as Pets} from '../../Assets/dogs.svg'
import { UserContext } from '../../context/UserContext'

export default function Header() {
    const {user} = useContext(UserContext)
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo} arial-label="Pets - Home">
                    <Pets/>
                </Link>
                {
                    user == null ? (
                        <Link to="/login" className={styles.login}>
                            Login / Criar
                        </Link>
                    ):(
                        <Link to="/account" className={styles.login}>
                            {user.username}
                        </Link>
                    )
                }
            </nav>
        </header>
    )
}
