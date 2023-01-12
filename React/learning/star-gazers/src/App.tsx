import React from 'react'
import { useState, useEffect } from 'react'
import Form from './components/Form'

export default function App() {
  const [shows, setShows] = useState()

  useEffect(() => {
    (async () => {
      const result = await fetch('https://api.tvmaze.com/search/shows?q=snow')
      const data = await result.json();
    })()
  }, [])

  return (
    <div>
      <Form />
    </div>
  )
}
