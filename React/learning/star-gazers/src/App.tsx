import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Table from './components/Table'

export default function App() {
  const [shows, setShows] = useState()

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'TV Show',
        // First group columns
        columns: [
          {
            Header: 'Name',
            accessor: 'show.name',
          },
          {
            Header: 'Type',
            accessor: 'show.type',
          },
        ],
      },
      {
        // Second group - Details
        Header: 'Details',
        // Second group columns
        columns: [
          {
            Header: 'Language',
            accessor: 'show.language',
          },
          {
            Header: 'Genre(s)',
            accessor: 'show.genres',
          },
          {
            Header: 'Runtime',
            accessor: 'show.runtime',
          },
          {
            Header: 'Status',
            accessor: 'show.status',
          },
        ],
      },
    ],
    [],
  )

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=snow')
      .then((res) => res.json())
      .then((data) => setShows(data))
  }, [])

  return (
    <div>
      <Form />
      <Table columns={columns} data={shows} />
    </div>
  )
}
