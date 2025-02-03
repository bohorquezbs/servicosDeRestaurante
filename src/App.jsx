import { Route, Routes } from "react-router";
import { Pedidos } from "./pages/Pedidos";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [items, setItems] = useState(0);
  return (
    <>
      <Input />
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
