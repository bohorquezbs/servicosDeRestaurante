import { Route, Routes } from "react-router"
import { Bebidas } from "./pages/Bebidas"
import { useState } from "react"

function App() {
  const [items, setItems] = useState(0)
  return (
    <>
      <Routes>
        <Route
          path="/bebidas"
          element={<Bebidas
            items={items}
            setItems={setItems}
          />
          } />
      </Routes>

    </>
  )
}

export default App
