import React, { useState } from 'react';

export function ExtrasQuantity() {

  const data = [
    {
      id: 1,
      nombre: "Tomate"
    },
    {
      id: 2,
      nombre: "Cebolla"
    },
    {
      id: 3,
      nombre: "Salsa picante"
    },
  ]

  const [contador, setContador] = useState({})

  function onIncrease(id) {
    setContador(prevcontador => ({
      ...prevcontador,
      [id]: (prevcontador [id || 0]) +1
    }))
  }
  function onDecrease(id) {
    setContador(prevcontador => ({
      ...prevcontador,
      [id]: Math.max(0, (prevcontador [id] || 0) -1) 
    }))
  }
  return (
    <div className="flex flex-col items-center ">
      <nav className="mb-10 w-screen py-5 bg-[#da5e2b]">
        <h1 className="text-center text-white font-semibold text-2xl">Extras</h1>
      </nav>
      <ul className="self-start mb-60 px-10">
        {data.map(extra => (
        <li className="flex items-center justify-between space-x-36">
          <span>{extra.nombre}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onDecrease (extra.id)}
              className="font-extrabold rounded-full border text-2xl px-3 py-0.5 text-center mb-3 bg-gray-200 hover:bg-gray-300">
              -</button>
            <span>{contador[extra.id] || 0}</span>
            <button
              onClick={() => onIncrease (extra.id)}
              className=" font-extrabold rounded-full border text-2xl px-2 py-0.5 text-center mb-3 bg-gray-200 hover:bg-gray-300">
              +</button>
          </div>
        </li>
       
        ))}
      </ul>

      <ul className="flex justify-between space-x-10">
        <button className="border px-5 hover:bg-gray-300">Cancelar</button>
        <button className="border px-5 bg-[#e79406] hover:bg-[#b87c04]">Confirmar</button>
      </ul>
    </div>
  )
}
