import { Route, Routes } from "react-router";
import { Pedidos } from "./pages/Pedidos";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(0);
  return (
    <>
      <Routes>
        <Route
          path="/pedidos"
          element={<Pedidos items={items} setItems={setItems} />}
        />
      </Routes>
    </>
  );
}

export default App;
