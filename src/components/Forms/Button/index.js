import React from 'react'
import styles from './styles.module.css'

export default function Button({children,...props}) {
  return (
    <button {...props} className={styles.button} >{children}</button>
  )
}
