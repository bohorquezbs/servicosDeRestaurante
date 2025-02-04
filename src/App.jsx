import { Route, Routes } from "react-router"
import { Bebidas } from "./pages/Bebidas"
import { useState } from "react"
import { Detail } from "./components/Detail"

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
          <Route 
          path="/detalle"
          element={<Detail
          items={items}
          setItems={setItems}
          />}
          />
      </Routes>
      

    </>
  )
}

export default App
