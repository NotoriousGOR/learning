import React, { createContext, useContext, useState } from 'react'

const ColorContext = createContext(null)

function ColorPicker({ setColorPicked }) {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColorPicked(color)}
        />
      ))}
    </div>
  )
}

function Pixel() {
  const colorPicked = useContext(ColorContext)
  const [pixelColor, setPixelColor] = useState(colorPicked)

  return (
    <div
      style={{
        height: '20px',
        width: '20px',
        backgroundColor: pixelColor,
        margin: '1px',
      }}
      onClick={() => setPixelColor(colorPicked)}
    />
  )
}

function Pixels() {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        width: '210px',
        margin: '0 auto',
      }}
    >
      {pixels}
    </div>
  )
}

export default function PixelArt() {
  const [colorPicked, setColorPicked] = useState('lightGrey')

  return (
    <div>
      <ColorContext.Provider value={colorPicked}>
        <ColorPicker setColorPicked={setColorPicked} />
        <Pixels />
      </ColorContext.Provider>
    </div>
  )
}
