import React from 'react'
import styles from './styles.module.css'

export default function Input({label,type,name}) {
  return (
    <div className={styles.container}>
        <label htmlFor={name} className={styles.label}>
            {label}
        </label>
        <input className={styles.input} type={type} id={name}/>
        <p className={styles.error}>Error</p>
    </div>
  )
}
