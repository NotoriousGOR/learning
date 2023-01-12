import Layout from '../../components/Layout'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function News({ results }) {
  return (
    <Layout className="flex align-middle justify-center">
      <h1 className={inter.className}>Top Stories</h1>
      <ul>
        {results.map((result) => (
          <li className="m-2" key={result.uri}>
            <Link href={`${result.url}`} target="_blank">
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

const API_KEY = '9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ'

export async function getStaticProps() {
  const url = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${API_KEY}`
  const response = await fetch(url).then((res) => res.json())
  console.log(response.results)
  return {
    props: {
      results: response.results,
    },
  }
}
