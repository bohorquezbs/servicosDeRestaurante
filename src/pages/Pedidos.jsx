import React, { useState } from 'react'
import { Pedido } from '../components/Pedido'
import { bebidas } from '../../public/API/bebidas'
export function Pedidos({ items, setItems }) {
  const [drinks, setDrinks] = useState(bebidas)

  return (
    <div className='flex w-full min-h-screen bg-[#ECECEC]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[100%] h-[100%] gap-2 md:gap-4 ms-2 md:ms-6 mt-5">
        {drinks.map(drink =>
          <Pedido
            drink={drink}
            key={drink.id}
            items={items}
            setItems={setItems}
          />
        )}
      </div>
    </div>
  )
}
