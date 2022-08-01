import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    const {login} = useContext(UserContext)
   
    return login ? <>{children}</>:<Navigate to="/login"/>
}
