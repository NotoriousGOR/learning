import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import contacts from '../api/contacts'

export default function Contacts() {
  return (
    <Layout>
      <ul>
        {contacts.map((contact) => (
            <Link href={`contacts/${contact.id}`}>
            <li>{contact.id}</li>
            </Link>
        ))}
      </ul>
    </Layout>
  )
}
