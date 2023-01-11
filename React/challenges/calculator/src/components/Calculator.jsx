import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'update_number_1':
      return {
        number1: action.value,
        number2: state.number2,
        result: state.result,
      }

    case 'update_number_2':
      return {
        number1: state.number1,
        number2: action.value,
        result: state.result,
      }

    case 'add':
      return {
        number1: state.number1,
        number2: state.number2,
        result: state.number1 + state.number2,
      }

    case 'sub':
      return {
        number1: state.number1,
        number2: state.number2,
        result: state.number1 - state.number2,
      }

    default:
      return {
        number1: 0,
        number2: 0,
        result: 0,
      }
  }
}

export default function Calculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [state, dispatch] = useReducer(reducer, {
    number1: 0,
    number2: 0,
    result: 0,
  })

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: 'update_number_1', value: number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: 'update_number_2', value: number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: 'add' })}>+</button>
        <button onClick={() => dispatch({ type: 'sub' })}>-</button>
        <button onClick={() => dispatch({ type: 'clear' })}>c</button>
      </div>
      <div>
        <h2>Result: {state.result}</h2>
      </div>
    </div>
  )
}
