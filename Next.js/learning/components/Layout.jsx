import { Inter } from '@next/font/google'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div>
      <ul className={`${styles.card} m-5`}>
        <Link href="/" className={`${inter.className} pr-9`}>Home</Link>
        <Link href="/contacts" className={inter.className}>Contacts</Link>
      </ul>
      {children}
    </div>
  )
}
