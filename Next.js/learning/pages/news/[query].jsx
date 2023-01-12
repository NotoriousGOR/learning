import Layout from '../../components/Layout'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { search } from '../api'

const inter = Inter({ subsets: ['latin'] })

export default function NewsQuery({ results }) {
  return (
    <Layout className="flex align-middle justify-center">
      <h1 className={inter.className}>Search</h1>
      <ul>
        {results.map((result) => (
          <li className="m-2" key={result.uri}>
            <Link
              href={`${result.url}`}
              target="_blank"
              rel="noopener norefferer"
            >
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

const API_KEY = '9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ'

export async function getServerSideProps({ params }) {
  const results = await search(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`,
  )

  return {
    props: { results },
  }
}
