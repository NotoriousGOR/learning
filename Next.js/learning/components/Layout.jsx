import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.card}>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/contacts">Contacts</Link>
      </ul>
      {children}
    </div>
  )
}
