import { useState } from 'react'

const items = [
  {
    name: 'apple',
    price: 0.39,
  },
  {
    name: 'banana',
    price: 0.79,
  },
  {
    name: 'cherry tomatoes',
    price: 3.99,
  },
]

function ShoppingCart() {
  const [cart, setCart] = useState([
    { name: 'apple', quantity: 3, price: 0.39 },
  ])

  const addToCart = (item) => {
    const itemInCart = cart.find((i) => item.name === i.name)

    if (itemInCart) {
      changeQuantity(item, true)
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const changeQuantity = (item, increase) => {
    const itemInCart = cart.find((i) => item.name === i.name)

    if (increase) {
      itemInCart.quantity++
    } else {
      itemInCart.quantity -= 1
    }

    setCart([...cart])
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => changeQuantity(item, false)}>-</button>
                {item.quantity}
                <button onClick={() => changeQuantity(item, true)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>
          Total: $
          {cart.reduce((acc, i) => acc + i.quantity * i.price, 0).toFixed(2)}
        </h2>
      </div>
    </div>
  )
}

export default ShoppingCart
