import { useState } from 'react'
import { ExtrasQuantity } from "./components/ExtrasQuantity";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExtrasQuantity></ExtrasQuantity>
    </>
  )
}

export default App
