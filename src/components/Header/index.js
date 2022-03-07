import React from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom' 
import {ReactComponent as Pets} from '../../Assets/dogs.svg'

export default function Header() {
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo} arial-label="Pets - Home">
                    <Pets/>
                </Link>
                <Link to="/login" className={styles.login}>
                    Login / Criar
                </Link>
            </nav>
        </header>
    )
}
