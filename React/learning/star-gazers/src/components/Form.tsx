import React from 'react'
import { useState } from 'react'

type InputData = {
  first_name: string
  last_name: string
  age: number
}

export default function Form() {
  const [input, setInput] = useState({} as InputData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInput((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    alert(
      `hello, ${input.first_name} ${input.last_name}. Are you ${input.age} years old?`,
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your first name:
        <input
          type="text"
          name="first_name"
          value={input.first_name || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your last name:
        <input
          type="text"
          name="last_name"
          value={input.last_name || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={input.age || ''}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
