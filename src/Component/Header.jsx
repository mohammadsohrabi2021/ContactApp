import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://lrenweb.iran.liara.run/">
            LrenWeb 
            </a> | Mohammad Sohrabi
        </p>
    </div>
  )
}

export default Header