import React, { useContext,useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { ReactComponent as FeedImage  } from '../../Assets/feed.svg'
import { ReactComponent as StatsImage  } from '../../Assets/stats.svg'
import { ReactComponent as PostImage } from '../../Assets/add.svg'
import { ReactComponent as LogoutImage  } from '../../Assets/logout.svg'
import styles from './UserHeaderNavStyle.module.css'

export default function UserHeaderNav() {
    const [mobile,setMobile] = useState(null)
    const {userLogout} = useContext(UserContext)

    return (
        <nav className={styles.nav}>
            <NavLink to="/account" end>
                <FeedImage/> 
                {mobile&&'Minhas Fotos'}
            </NavLink>

            <NavLink to="/account/stats">
                <StatsImage/>
                {mobile&&'Estatísticas'}
            </NavLink>

            <NavLink to="/account/post">
                <PostImage/> 
                {mobile&&'Adicionar Foto'}
            </NavLink>

            <button onClick={userLogout}>
                <LogoutImage/> 
                {mobile&&'Sair'}
            </button>
        </nav>
    )
}
