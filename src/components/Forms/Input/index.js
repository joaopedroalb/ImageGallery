import React from 'react'
import styles from './styles.module.css'

export default function Input({label,type,name,value,onChange,onBlur,error}) {
  return (
    <div className={styles.container}>
        <label htmlFor={name} className={styles.label}>
            {label}
        </label>
        <input className={styles.input} type={type} id={name} onChange={onChange} value={value} onBlur={onBlur}/>
        {error&&<p className={styles.error}>{error}</p>}
    </div>
  )
}
