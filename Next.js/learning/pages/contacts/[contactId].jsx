import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout';

import contacts from '../api/contacts';
import styles from "../../styles/Home.module.css"

export default function Contact() {
    const { contactId } = useRouter().query;
    const filteredContact = contacts.find(contact => contact.id === contactId)
  return (
    <Layout>
        <ul className={styles.card}>
            <li>{filteredContact.id}</li>
            <li>{filteredContact.name}</li>
            <li>{filteredContact.country}</li>
        </ul>
    </Layout>
  )
}
