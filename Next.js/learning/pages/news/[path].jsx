import Head from 'next/head'
import Layout from '../../components/Layout'
import { handler } from '../api'

function Posts({ results, title }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
        <ul>
          {results?.map((result) => (
            <li>
              <a href={result.url} key={result.uri} rel="noreferrer nofollower">
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  return {
    paths: [
      { params: { path: 'top-stories' } },
      { params: { path: 'popular' } },
    ],
    fallback: false,
  }
}

// to register for a new New York Times API KEY, visit :
const API_KEY = '9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ'
// This also gets called at build time
export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  switch (params.path) {
    case 'top-stories':
      return {
        props: {
          results: await handler(
            `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`,
          ),
          title: 'Top Stories',
        },
      }

    case 'popular':
      return {
        props: {
          results: await handler(
            `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
          ),
          title: 'Most Popular Stories',
        },
      }
    default:
      return {
        props: null,
      }
  }
}

export default Posts
