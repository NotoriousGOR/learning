import Layout from '../../components/Layout'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function News({ results }) {
  return (
    <Layout>
      <h1 className={inter.className}>Top Stories</h1>
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
